import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./shopUpdate.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../../../BaseURL/BaseURL";
import { toast } from "react-toastify";
import PublishTiming, { scheduleError, toUtcIso, toLocalInputValue } from "../../../../components/admin/PublishTiming";

const ShopUpdate = () => {
  const getInitialState = () => {
    const value = "Pos";
    return value;
  };

  const [Loading, setLoading] = useState(false);

  const { id } = useParams();

  const [slug, setSlug] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [odd, setOdd] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(getInitialState);

  const [series, setSeries] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [dimension, setdimension] = useState("");
  const [item, setItem] = useState("");
  const [color, setColor] = useState("");
  const [hardware, setHardware] = useState("");
  const [os, setOs] = useState("");
  const [processor, setProcessor] = useState("");
  const [number, setNumber] = useState("");
  const [memory, setMemory] = useState("");
  const [ram, setRam] = useState("");
  const [drive, setDrive] = useState("");
  const [display, setDisplay] = useState("");
  const [resolution, setResolution] = useState("");
  const [graphics, setGraphics] = useState("");
  const [voltage, setVoltage] = useState("");
  const [battery, setBattery] = useState("");
  const [wireless, setWireless] = useState("");


  const [images, setImages] = useState([]);
  const [publishMode, setPublishMode] = useState("now"); // "now" | "schedule"
  const [publishAt, setPublishAt] = useState("");
  const [originalStatus, setOriginalStatus] = useState("published");

  // Handle Price
  const handleChangePrice = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPrice(value);
  };

  // Handle Odd
  const handleChangeOdd = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOdd(value);
  };
  // Handle Quantity
  const handleChangeQuantity = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setQuantity(value);
  };

  //handle images
  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const navigate = useNavigate();

  // fetch data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Admin endpoint — unfiltered, so a scheduled or draft product can
        // still be opened here. The public /api/v1/product/:id hides those
        // entirely, which would make it impossible to edit or reschedule them.
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await axios.get(`${BASEURL}/api/v1/product/admin/${id}`, {
          headers: { "x-access-token": token },
        });

        setOriginalStatus(res.data.product.status || "published");
        if (res.data.product.status === "scheduled" && res.data.product.publishAt) {
          setPublishMode("schedule");
          setPublishAt(toLocalInputValue(res.data.product.publishAt));
        }

        setSlug(res.data.product.slug);
        setName(res.data.product.name);
        setDescription(res.data.product.description);
        setPrice(res.data.product.price);
        setOdd(res.data.product.odd);
        setCategory(res.data.product.category);
        setBrand(res.data.product.brand);
        setQuantity(res.data.product.quantity);
        const cp = res.data.product.computerProperty?.[0] || {};
        setSeries(cp.series || "");
        setModel(cp.model || "");
        setWeight(cp.weight || "");
        setdimension(cp.dimension || "");
        setItem(cp.item || "");
        setColor(cp.color || "");
        setHardware(cp.hardware || "");
        setOs(cp.os || "");
        setProcessor(cp.processor || "");
        setNumber(cp.number || "");
        setMemory(cp.memory || "");
        setRam(cp.ram || "");
        setDrive(cp.drive || "");
        setDisplay(cp.display || "");
        setResolution(cp.resolution || "");
        setGraphics(cp.graphics || "");
        setVoltage(cp.voltage || "");
        setBattery(cp.battery || "");
        setWireless(cp.wireless || "");


      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, []);

  //submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const timingError = scheduleError(publishMode, publishAt);
    if (timingError) return toast.error(timingError);

    try {
      const newData = {
        name,
        description,
        price,
        odd,
        brand,
        quantity,
        category,
        series,
        model,
        weight,
        dimension,
        item,
        color,
        hardware,
        os,
        processor,
        number,
        memory,
        ram,
        drive,
        display,
        resolution,
        graphics,
        voltage,
        battery,
        wireless,
        images
      };

      // Only touch scheduling fields when the admin actually changed something
      // here — the backend deliberately leaves status/publishAt alone
      // otherwise, so a plain content edit never reschedules or hides a product.
      if (publishMode === "schedule") {
        newData.publishAt = toUtcIso(publishAt);
      } else if (originalStatus !== "published") {
        // was scheduled/draft, admin switched it to "Publish now"
        newData.status = "published";
      }

      const token = JSON.parse(localStorage.getItem('token'));
      await axios.put(`${BASEURL}/api/v1/product/${id}/update`, newData, { headers: { 'x-access-token': token } });
      toast.success("Product Updated Successfully");
      setImages([]);
      navigate(`/product/${slug}/${id}`)
      // /product/:slug/:id
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) {
        errors.forEach(msg => toast.error(msg));
      } else {
        toast.error(error.response?.data?.message || "Failed to update product");
      }
    }
  };

  // image

  const handleSubmitImage = async (e) => {
    try {
      e.preventDefault();
      const newData = {
        name,
        description,
        price,
        odd,
        brand,
        category,
        images
      };

      const token = JSON.parse(localStorage.getItem('token'));
      await axios.put(`${BASEURL}/api/v1/product/${id}/update/image`, newData, { headers: { 'x-access-token': token } });
      toast.success("Product Images Updated Successfully");
      setImages([]);
      navigate(`/product/${slug}/${id}`);
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors?.length) {
        errors.forEach(msg => toast.error(msg));
      } else {
        toast.error(error.response?.data?.message || "Failed to update product images");
      }
    }finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        class="container-fluid  py-5 "
        style={{
          height: "500px",
          background: "#11253d",
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/dahnwukbz/image/upload/v1783693213/Shop-banner-test_wgekev_tdgltx.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div class="py-5 mt-5 ">
          <h2 class=" mt-5 text-white text-center">Product Update</h2>
          <h5 class=" mt-4 text-white text-center"></h5>
          <p class="lead text-white text-center"></p>
        </div>
      </div>
      <div
        className=" container bg-size mt-5 mb-5 "
        style={{ marginTop: "0rem" }}
      >
        <h2 className="text-center mb-5 fw-bold">
          Update Office Equipment, POS System, Printers and Network Devices
        </h2>
        <div className="">
          <div className="row">
            <div class="mb-3 col-md-6">
              <label for="exampleInputEmail1" class="form-label fw-bold">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Gadget Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="exampleInputEmail1" class="form-label fw-bold">
                Brand
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Brand Name"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-2 mb-3">
              <label for="price" className="fw-bold">
                Price
              </label>
              <input
                type="text"
                id="price"
                class="form-control"
                value={price}
                onChange={handleChangePrice}
                name="price"
                placeholder="Enter price"
              ></input>
            </div>
            <div class="mb-3 col-md-4">
              <label for="formFile" class="form-label fw-bold">
                File
              </label>
              <input
                onChange={handleImage}
                type="file"
                id="formupload"
                name="image"
                className="form-control"
                multiple
              />
            </div>
            <div class="mb-3 col-md-4">
              <label for="exampleInputEmail1" class="form-label fw-bold">
                Categories
              </label>
              <select
                class="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="inputGroupSelect01"
              >
                <option value="Pos System">POS System</option>
                <option value="Computer">Computer</option>
                <option value="Office">Office</option>
                <option value="Printer">Printer</option>
                <option value="Network">Network Devices</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-2 mb-3">
              <label for="price" className="fw-bold">
                Discount
              </label>
              <input
                type="text"
                id="price"
                class="form-control"
                value={odd}
                onChange={handleChangeOdd}
                name="price"
                placeholder="Enter price"
              ></input>
            </div>
            <div class=" col-md-6 mb-3 ">
              <label for="exampleInputEmail1" class="form-label fw-bold">
                Quantity
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Quantity"
                value={quantity}
                onChange={handleChangeQuantity}
                aria-describedby="emailHelp"
              />
            </div>
          </div>

          {/*  */}
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <div className="editorContainer" id="exampleFormControlTextarea1">
              <ReactQuill
                className="editor"
                theme="snow"
                value={description}
                onChange={(value) => setDescription(value)}
              />
            </div>
          </div>

          {/* =====================  Table ===================  */}
          {category === "Computer" ? (
            <>
              <table class="table table-bordered" style={{ width: "100%" }}>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ width: "40%" }}>
                      Series
                    </th>
                    <td style={{ width: "60%" }}>
                      {" "}
                      <input
                        type="text"
                        value={series}
                        onChange={(e) => setSeries(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Item model number</th>
                    <td colspan="2">
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Item Weight</th>
                    <td>
                      <input
                        type="text"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Product Dimensions</th>
                    <td>
                      <input
                        type="text"
                        value={dimension}
                        onChange={(e) => setdimension(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Item Dimensions LxWxH</th>
                    <td>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td>
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hardware Platform</th>
                    <td>
                      <input
                        type="text"
                        value={hardware}
                        onChange={(e) => setHardware(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Operating System</th>
                    <td>
                      <input
                        type="text"
                        value={os}
                        onChange={(e) => setOs(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Processor Brand</th>
                    <td>
                      <input
                        type="text"
                        value={processor}
                        onChange={(e) => setProcessor(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Number of Processors</th>
                    <td>
                      <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Computer Memory Type</th>
                    <td>
                      <input
                        type="text"
                        value={memory}
                        onChange={(e) => setMemory(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">RAM</th>
                    <td>
                      <input
                        type="text"
                        value={ram}
                        onChange={(e) => setRam(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hard Drive</th>
                    <td>
                      <input
                        type="text"
                        value={drive}
                        onChange={(e) => setDrive(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Screen display size</th>
                    <td>
                      <input
                        type="text"
                        value={display}
                        onChange={(e) => setDisplay(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Screen Resolution</th>
                    <td>
                      <input
                        type="text"
                        value={resolution}
                        onChange={(e) => setResolution(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Graphics Comprocessor</th>
                    <td>
                      <input
                        type="text"
                        value={graphics}
                        onChange={(e) => setGraphics(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Voltage</th>
                    <td>
                      <input
                        type="text"
                        value={voltage}
                        onChange={(e) => setVoltage(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Batteries</th>
                    <td>
                      <input
                        type="text"
                        value={battery}
                        onChange={(e) => setBattery(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Wireless Type</th>
                    <td>
                      <input
                        type="text"
                        value={wireless}
                        onChange={(e) => setWireless(e.target.value)}
                        class="form-control form-controli border-0"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <></>
          )}
          {/* ============================================================ */}
          <PublishTiming
            mode={publishMode}
            onModeChange={setPublishMode}
            value={publishAt}
            onChange={setPublishAt}
          />
          <div className="col-md-5 mt-3 d-flex">
            <button
              type="submit"
              class="btn btn-warning me-3"
              onClick={handleSubmit}
            >
              Update Content
            </button>
            <button
              type="submit"
              class="btn btn-success"
              onClick={handleSubmitImage}
            >
              {Loading ? 'Loading' : 'Update Image'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopUpdate;