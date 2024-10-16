import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./shopWrite.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../../../../BaseURL/BaseURL";
import { toast } from "react-toastify";

const shopWrite = () => {
  const getInitialState = () => {
    const value = "Pos";
    return value;
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [odd, setOdd] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState(getInitialState);
  const [images, setImages] = useState([]);

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

  //===================== handle images
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

  //==============  Submit the form
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newData = {
        name,
        description,
        price,
        odd,
        brand,
        quantity,
        category,
        images,
      };
      const data = await axios.post(
        `${BASEURL}/api/v1/product/create`,
        newData
      );
      toast.success("Product Added Successfully");
      setImages([]);
      navigate("/shop");
    } catch (error) {
      toast.warning("Please Fill All Required Fields");
    }
  };

  return (
    <>
      <div className=" container bg-size py-5" style={{ marginTop: "5rem" }}>
        <h2 className="text-center mb-5 fw-bold">
          Upload Office, Pos and Printer.
        </h2>
        <div className="" style={{}}>
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
                onChange={(e) => setBrand(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="row">
            <div class="mb-3 mt-2 col-md-4">
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
                <option value="Pos System">Pos System</option>
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
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label fw-bold">
              Description
            </label>
            <div className="editorContainer" id="exampleFormControlTextarea1">
              <ReactQuill
                className="editor"
                theme="snow"
                onChange={(value) => setDescription(value)}
              />
            </div>
          </div>
          <div className="col-md-5 mt-3">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default shopWrite;