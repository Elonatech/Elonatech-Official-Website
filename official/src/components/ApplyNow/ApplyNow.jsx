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
    return "Male"; // Return value directly
  };

  const getCategoryState = () => {
    return "Job Role Applying For?";
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
  const [skills, setSkills] = useState("");
  const [category, setCategory] = useState(getCategoryState());
  const [status, setStatus] = useState(getStatusState());
  const [file, setFile] = useState(null);
  const [letter, setLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Prepare skills array
      const skillsArray = skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      // Clean letter for validation
      let cleanLetter = letter.trim();
      const letterEmpty =
        cleanLetter === "" ||
        cleanLetter === "<p><br></p>" ||
        cleanLetter === "<p></p>";

      // Basic frontend validation
      if (
        !firstname.trim() ||
        !lastname.trim() ||
        !email.trim() ||
        !number.trim() ||
        !gender ||
        !address.trim() ||
        !dob ||
        !category ||
        category === "Job Role Applying For?" ||
        !status ||
        letterEmpty ||
        !file ||
        skillsArray.length === 0
      ) {
        toast.error("Please fill all required fields correctly");
        setIsSubmitting(false);
        return;
      }

      // Email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      // Nigerian phone number
      const phoneRegex = /^0[7-9][0-1]\d{8}$/;
      if (!phoneRegex.test(number)) {
        toast.error("Enter a valid 11-digit Nigerian phone number");
        setIsSubmitting(false);
        return;
      }

      // Build FormData
      const formData = new FormData();
      formData.append("firstname", firstname.trim());
      formData.append("lastname", lastname.trim());
      formData.append("email", email.trim());
      formData.append("number", number.trim());
      formData.append("gender", gender);
      formData.append("address", address.trim());
      formData.append("dob", dob);
      formData.append("skills", JSON.stringify(skillsArray));
      formData.append("category", category);
      formData.append("status", status);
      formData.append("letter", cleanLetter || " "); // send a space if empty
      formData.append("file", file); // must match multer.single("file")

      // Debug logs
      console.log("=== FormData Entries ===");
      for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}: File name=${value.name}, size=${value.size}`);
        } else {
          console.log(`${key}: ${value} (${typeof value})`);
        }
      }

      // POST request
      const response = await axios.post(
        `${BASEURL}/api/v1/email/job`,
        formData,
        {
          timeout: 30000,
        }
      );

      console.log("Response:", response.data);
      toast.success("Job Application Sent Successfully!");
      resetForm();
      navigate("/application-success");
    } catch (error) {
      console.error("=== SUBMISSION ERROR ===");
      console.error("Status:", error.response?.status);
      console.error("Data:", error.response?.data);

      // Backend validation messages
      if (error.response?.data === "Please Fill All Fields") {
        toast.error(
          "Please ensure all fields are filled correctly, including at least one skill and valid DOB"
        );
      } else if (error.response?.data === "No File Received") {
        toast.error("Please upload your CV (PDF file)");
      } else if (error.response?.data === "Invalid File Type Pdf Only") {
        toast.error("Only PDF files are allowed for CV");
      } else {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again."
        );
      }

      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setNumber("");
    setGender(getGenderState());
    setAddress("");
    setDob("");
    setSkills("");
    setCategory(getCategoryState());
    setStatus(getStatusState());
    setFile(null);
    setLetter("");

    // Clear file input
    const fileInput = document.getElementById("file");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  // Handle modal close (when user clicks close or outside)
  const handleModalClose = () => {
    // Optional: Add confirmation if form has data
    if (
      firstname ||
      lastname ||
      email ||
      number ||
      address ||
      skills ||
      letter ||
      file
    ) {
      if (
        window.confirm(
          "Are you sure you want to close? Any unsaved data will be lost."
        )
      ) {
        resetForm();
      }
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
          data-bs-backdrop="static" // Prevent closing by clicking outside
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
                  onClick={handleModalClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="row justify-content-md-center">
                    <div className="row mt-2">
                      <div className="col">
                        <label
                          htmlFor="firstname"
                          className="form-label fw-bold"
                        >
                          First name<span className="">*</span>
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
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor="lastname"
                          className="form-label fw-bold"
                        >
                          Last name<span className="text-danger">*</span>
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
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email<span className="text-danger">*</span>
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
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor="number"
                          className="form-label w-100 fw-bold"
                        >
                          Phone Number<span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          id="number"
                          className="form-control"
                          placeholder="080 xxxx xxxx"
                          maxLength="11"
                          minLength="11"
                          value={number}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            setNumber(value);
                          }}
                          aria-label="Phone Number"
                          required
                          disabled={isSubmitting}
                        />
                        <small className="text-muted">
                          11-digit Nigerian number (e.g., 08012345678)
                        </small>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-4">
                        <label htmlFor="gender" className="form-label fw-bold">
                          Gender<span className="text-danger">*</span>
                        </label>
                        <select
                          id="gender"
                          className="form-select"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          aria-label="Gender"
                          required
                          disabled={isSubmitting}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div className="col-8">
                        <label htmlFor="address" className="form-label fw-bold">
                          Residence<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          placeholder="Current residence (State, Area, Nearest Bus-stop)"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          aria-label="Residence"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-4">
                        <label htmlFor="dob" className="form-label fw-bold">
                          Date of Birth<span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          id="dob"
                          className="form-control"
                          max={new Date().toISOString().split("T")[0]} // Prevent future dates
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          aria-label="Date of Birth"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="col-8">
                        <div className="mb-2">
                          <label htmlFor="skill" className="form-label fw-bold">
                            Skills/Specialty
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="skill"
                            className="form-control"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            placeholder="React, Node.js, MongoDB, etc."
                            required
                            disabled={isSubmitting}
                          />
                          <small className="text-muted">
                            Enter at least one skill separated by commas
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2">
                      <label htmlFor="category" className="form-label fw-bold">
                        Job Category<span className="text-danger">*</span>
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-select"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="Job Role Applying For?">
                          Job Role Applying For?
                        </option>
                        <option value="Graphic Designer/Digital Marketer">
                          Graphic Designer/Digital Marketer
                        </option>
                        <option value="Full Stack Web developer">
                          Full Stack Web developer
                        </option>
                        <option value="Digital Marketer">
                          Digital Marketer
                        </option>
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
                        Current Employment Status
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="form-select"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="Unemployed">Unemployed</option>
                        <option value="Employed">Employed</option>
                        <option value="Freelance">Freelance</option>
                      </select>
                    </div>

                    <div className="mt-3">
                      <label htmlFor="file" className="form-label fw-bold">
                        Upload your CV (PDF){" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="file"
                        className="form-control pt-1"
                        aria-describedby="fileHelp"
                        onChange={(e) => {
                          const selectedFile = e.target.files[0];
                          if (selectedFile) {
                            // Validate file type
                            if (selectedFile.type !== "application/pdf") {
                              toast.error("Only PDF files are allowed");
                              e.target.value = ""; // Clear the input
                              setFile(null);
                            } else if (selectedFile.size > 150 * 1024 * 1024) {
                              // 150MB
                              toast.error("File size must be less than 150MB");
                              e.target.value = "";
                              setFile(null);
                            } else {
                              setFile(selectedFile);
                            }
                          }
                        }}
                        aria-label="Upload CV"
                        style={{ fontSize: "12px" }}
                        accept=".pdf,application/pdf"
                        required
                        disabled={isSubmitting}
                      />
                      <p id="fileHelp" className="pt-2 text-muted">
                        Accepted file type: pdf, Max. file size: 150 MB.
                      </p>
                      {file && (
                        <p className="text-success">
                          Selected: {file.name} (
                          {(file.size / (1024 * 1024)).toFixed(2)} MB)
                        </p>
                      )}
                    </div>

                    <div className="col mt-3" style={{ marginBottom: "5rem" }}>
                      <label htmlFor="letter" className="form-label fw-bold">
                        Cover Letter<span className="text-danger">*</span>
                      </label>
                      <ReactQuill
                        theme="snow"
                        id="letter"
                        className="quill-editor"
                        placeholder="Write your cover letter here..."
                        style={{ height: "150px", marginBottom: "50px" }}
                        value={letter}
                        onChange={(value) => setLetter(value)}
                        readOnly={isSubmitting}
                        modules={{
                          toolbar: [
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["clean"],
                          ],
                        }}
                      />
                      <small className="text-muted">
                        Cover letter is required. Please write a brief
                        introduction about yourself.
                      </small>
                    </div>
                  </div>

                  <div className="modal-footer border-0 mt-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleModalClose}
                      disabled={isSubmitting}
                    >
                      <h6 className="mb-0">Close</h6>
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      <h6 className="mb-0">
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Submitting...
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </h6>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
