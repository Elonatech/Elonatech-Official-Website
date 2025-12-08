import { useState } from "react";
import ReactQuill from "react-quill/lib";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./applyNow.css";

const ApplyNow = () => {
  let navigate = useNavigate();

  const getGenderState = () => {
    return "Male";
  };

  const getCategoryState = () => {
    return "";
  };

  const getStatusState = () => {
    return "Unemployed";
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState(getGenderState());
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [skill, setSkill] = useState("");
  const [category, setCategory] = useState(getCategoryState());
  const [status, setStatus] = useState(getStatusState());
  const [file, setFile] = useState(null);
  const [letter, setLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!file) {
        toast.error("Please upload a PDF file");
        setIsSubmitting(false);
        return;
      }
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed");
        setIsSubmitting(false);
        return;
      }

      console.log({
        firstname,
        lastname,
        email,
        number,
        gender,
        address,
        dob,
        category,
        status,
        letter,
        skill,
        file,
      });

      const formData = new FormData();
      formData.append("firstname", firstname.trim());
      formData.append("lastname", lastname.trim());
      formData.append("email", email.trim());
      formData.append("number", number.trim());
      formData.append("gender", gender.trim());
      formData.append("address", address.trim());
      formData.append("dob", dob.trim());
      formData.append("category", category.trim());
      formData.append("status", status.trim());
      formData.append("letter", letter);
      formData.append("skill", skill.trim());
      formData.append("file", file);

      // Debug log
      console.log("Submitting form data:");
      for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}: [File] ${value.name}`);
        } else {
          console.log(`${key}: ${value}`);
        }
      }

      const res = await axios.post(
        ` http://localhost:8000/api/v1/email/job`,
        formData
      );

      console.log("form-data", res.data);

      if (res.data.status === "success") {
        toast.success("Job Application Sent Successfully");

        // Reset form
        setFirstname("");
        setLastname("");
        setEmail("");
        setNumber("");
        setGender(getGenderState());
        setAddress("");
        setDob("");
        setSkill("");
        setCategory(getCategoryState());
        setStatus(getStatusState());
        setFile(null);
        setLetter("");

        // Close modal
        const modal = document.getElementById("exampleModal5");
        if (modal) {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) modalInstance.hide();
        }

        navigate("/application-success");
      } else {
        toast.error(res.data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <button
          className="btn btn-primary border border-light text-light mt- mb-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal5"
        >
          <h6 className="mt-1">Apply Now</h6>
        </button>

        <div
          className="modal fade"
          id="exampleModal5"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fw-bold" id="exampleModalLabel">
                  Apply Now
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-md-center">
                  <div className="row mt-2">
                    <div className="col">
                      <label htmlFor="firstname" className="form-label fw-bold">
                        First name<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        className="form-control"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        aria-label="First name"
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="lastname" className="form-label fw-bold">
                        Last name<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        className="form-control"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        aria-label="Last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email<span>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email"
                        required
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="number"
                        className="form-label w-100 fw-bold"
                      >
                        Phone Number<span>*</span>
                      </label>
                      <input
                        type="tel"
                        id="number"
                        className="form-control"
                        placeholder="080 xxxx xxxx"
                        value={number}
                        maxLength="11"
                        onChange={(e) => setNumber(e.target.value)}
                        aria-label="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <label htmlFor="gender" className="form-label fw-bold">
                        Gender<span>*</span>
                      </label>
                      <select
                        id="gender"
                        className="form-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        aria-label="Gender"
                        required
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="col-8">
                      <label htmlFor="address" className="form-label fw-bold">
                        Residence<span>*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Current residence(State,Area,Nearest B/s)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        aria-label="Residence"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-4">
                      <label htmlFor="dob" className="form-label fw-bold">
                        Date of Birth<span>*</span>
                      </label>
                      <input
                        type="date"
                        id="dob"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        aria-label="Date of Birth"
                        required
                      />
                    </div>
                    <div className="col-8">
                      <div className="mb-2">
                        <label htmlFor="skill" className="form-label fw-bold">
                          Skills/Specialty<span>*</span>
                        </label>
                        <input
                          type="text"
                          id="skill"
                          className="form-control"
                          value={skill}
                          onChange={(e) => setSkill(e.target.value)}
                          placeholder="separate each skill with a comma"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="category" className="form-label fw-bold">
                      Job Category<span>*</span>
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Graphic Designer/Digital Marketer">
                        Graphic Designer/Digital Marketer
                      </option>
                      <option value="Full Stack Web developer">
                        Full Stack Web developer
                      </option>
                      <option value="Digital Marketer">Digital Marketer</option>
                      <option value="Animations/Motion Graphics & UI/UX Graphic Designer">
                        Animations/Motion Graphics & UI/UX Graphic Designer
                      </option>
                      <option value="Systems/Network Engineer">
                        Systems/Network Engineer
                      </option>
                      <option value="Marketing & Sales Representative">
                        Marketing & Sales Representative
                      </option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="status" className="form-label fw-bold">
                      Current Employment Status<span>*</span>
                    </label>
                    <select
                      id="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="form-select"
                      required
                    >
                      <option value="Unemployed">Unemployed</option>
                      <option value="Employed">Employed</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="file" className="form-label fw-bold">
                      Upload your CV (PDF) <span>*</span>
                    </label>
                    <input
                      type="file"
                      id="file"
                      className="form-control pt-1"
                      aria-describedby="fileHelp"
                      onChange={(e) => setFile(e.target.files[0])}
                      aria-label="Upload CV"
                      style={{ fontSize: "12px" }}
                      required
                    />
                    <p id="fileHelp" className="pt-2">
                      Accepted file types: pdf, Max. file size: 150 MB.
                    </p>
                    {file && (
                      <div className="text-success small">
                        Selected: {file.name}
                      </div>
                    )}
                  </div>
                  <div className="col" style={{ marginBottom: "5rem" }}>
                    <label htmlFor="letter" className="form-label fw-bold">
                      Cover Letter
                    </label>
                    <ReactQuill
                      theme="snow"
                      id="letter"
                      className=""
                      placeholder="cover letter"
                      style={{ height: "100px" }}
                      onChange={(value) => setLetter(value)}
                      value={letter}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  disabled={isSubmitting}
                >
                  <h6>Close</h6>
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  <h6>{isSubmitting ? "Submitting..." : "Submit"}</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
