import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from "react-router-dom";

const Session = () => {
  const [appointment, setAppointment] = useState("choose");
  const [online, setOnline] = useState("choose");
  const [offline, setOffline] = useState("choose");

  const [showHour, setShowHour] = useState(false);
  const [showMinute, setShowMinute] = useState(false);

  const handleAppointmentChange = (e) => {
    setAppointment(e.target.value);
  };
  const handleOnlineChange = (e) => {
    // setOnline(e.target.value);
    console.log("online", online);
  };
  const handleOfflineChange = (e) => {
    setOffline(e.target.value);
  };

  const getGmtState = () => {
    const value = "AM";
    return value;
  };

  // ==========================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [meet, setMeet] = useState("");
  const [address, setAddress] = useState("");
  const [discuss, setDiscuss] = useState("");
  const [date, setDate] = useState("");

  // ======================= Time
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [gmt, setGmt] = useState(getGmtState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  const handleChangeMinute = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setMinute(value);
  };
  const handleChangeHour = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setHour(value);
  };

  const handleChangeMeet = (e) => {
    const value = e.target.value;
    setMeet(value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formValues = {
      name,
      email,
      phone,
      online,
      meet,
      address,
      discuss,
      date,
      hour,
      minute,
      gmt,
    };

    console.log("form-data", formValues);

    try {
      const response = await axios.post(
        `${BASEURL}/api/v1/email/session`,
        formValues
      );

      console.log(response);

      if (response) {
        toast.success(response.data);
        setTimeout(() => {
          navigate(0);
        }, 7000);
      }
    } catch (error) {
      toast.error(error.response?.data || "Something went wrong");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <h5>Book A Session</h5>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header text-dark">
              <h5 class="modal-title fw-bold" id="exampleModalLabel">
                Book A Session
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-dark">
              {/*================================================= Body  ========================================================  */}
              <form>
                {/*=========================================================================================================  */}
                <div class="mb-3">
                  <label for="exampleInputname1" class="form-label fw-bold">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={name}
                    id="exampleInputname1"
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fw-bold">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    id="exampleInputEmail1"
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label fw-bold">
                    Phone Number<span className="text-danger">*</span>
                  </label>
                  <input
                    class="form-control"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label fw-bold">
                    Pick your Appointment of Choice
                    <span className="text-danger">*</span>
                  </label>
                  <select
                    class="form-select form-control"
                    onChange={handleAppointmentChange}
                    aria-label="Default select example"
                  >
                    <option selected>You can only choose one</option>
                    <option value="online">Online Appointment</option>
                    <option value="offline">Offline Appointment</option>
                  </select>
                </div>
                {/*=========================================================================================================  */}

                {/* ===============================   online ==================================== */}
                {appointment === "online" && (
                  <>
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label fw-bold"
                      >
                        Ok! Online Choose a Platform
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select form-control"
                        onChange={(e) => setOnline(e.target.value)}
                        value={online}
                        aria-label="Default select example"
                      >
                        <option selected>Select your preferred platform</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Google Meet">Google Meet</option>
                        <option value="WhatApp Video Call">
                          WhatApp Video Call
                        </option>
                        <option value="Facebook Video Call">
                          Facebook Video Call
                        </option>
                      </select>
                    </div>

                    {[
                      "Zoom",
                      "Google Meet",
                      "WhatApp Video Call",
                      "Facebook Video Call",
                    ].includes(online) && (
                      <div className="mb-3">
                        <label class="form-label fw-bold">
                          Provide the Online ID, Username or Number you choose
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          class="form-control"
                          placeholder="Provide the Online ID or Number you choose"
                          value={meet}
                          onChange={handleChangeMeet}
                        />
                        <p className="mt-2">
                          Provide your Online ID, Username or Number of the
                          Online Platform.
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* =========================================== offine ===================================================== */}
                {appointment === "offline" && (
                  <>
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        class="form-label fw-bold"
                      >
                        Ok! OFFLINE Choose a means
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        class="form-select form-control"
                        onChange={handleOfflineChange}
                        aria-label="Default select example"
                      >
                        <option selected>Choose one Location</option>
                        <option value="location">
                          Your Location (Lagos Only)
                        </option>
                        <option value="3">Our Office</option>
                      </select>
                      <p className="mt-2">Pick a place of your choice</p>
                    </div>
                    {offline === "location" && (
                      <>
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            class="form-label fw-bold"
                          >
                            Your Address (Lagos Only)?
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Your Address (Lagos Only)?"
                            onChange={(e) => setAddress(e.target.value)}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                          <p className="mt-2">
                            If you stay outside Lagos, please pick the Online
                            Platform
                          </p>
                        </div>
                      </>
                    )}
                  </>
                )}

                {/*================================= default ========================== */}

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label fw-bold">
                    Pick a Date for the meeting<span>*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    aria-label="Pick a Date for the Meeting"
                    required
                  />
                  <p className="mt-2">
                    Which day are you proposing for this meeting?
                  </p>
                </div>

                <div className="mb-3">
                  <label for="" class="form-label fw-bold">
                    Choose the time suited for you
                    <span className="text-danger">*</span>
                  </label>
                  <div className="row ">
                    <div className="col-sm-2 position-relative border">
                      <div
                        className="card border-0 p-2 text-center"
                        style={{ width: "4rem", cursor: "pointer" }}
                        onClick={() => setShowHour(!showHour)}
                      >
                        {hour || "HH"}
                      </div>

                      {showHour && (
                        <div
                          className="position-absolute bg-white shadow p-2"
                          style={{
                            width: "4rem",
                            maxHeight: "150px",
                            overflowY: "auto",
                            zIndex: 10,
                          }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((h) => (
                            <div
                              key={h}
                              className="p-1 text-center hover-bg"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setHour(h.toString().padStart(2, "0"));
                                setShowHour(false);
                              }}
                            >
                              {h}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="col-sm-2 position-relative border">
                      <div
                        className="card border-0 p-2 text-center"
                        style={{ width: "4rem", cursor: "pointer" }}
                        onClick={() => setShowMinute(!showMinute)}
                      >
                        {minute || "MM"}
                      </div>

                      {showMinute && (
                        <div
                          className="position-absolute bg-white shadow p-2"
                          style={{
                            width: "4rem",
                            maxHeight: "150px",
                            overflowY: "auto",
                            zIndex: 10,
                          }}
                        >
                          {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                            <div
                              key={m}
                              className="p-1 text-center"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setMinute(m.toString().padStart(2, "0"));
                                setShowMinute(false);
                              }}
                            >
                              {m.toString().padStart(2, "0")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* <div className="col-sm-2">
                      <div className="card border-0">
                        <div style={{ width: "4rem" }}>
                          <input
                            class="form-control"
                            maxlength="2"
                            value={minute}
                            onChange={handleChangeMinute}
                            placeholder="MM"
                          />
                        </div>
                      </div>
                    </div> */}
                    <div className="col-sm-2">
                      <div className="card border-0">
                        <div class="input-group" style={{ width: "6rem" }}>
                          <select
                            class="form-select form-control"
                            id="inputGroupSelect04"
                            value={gmt}
                            onChange={(e) => setGmt(e.target.value)}
                            aria-label="Example select with button addon"
                          >
                            <option selected>AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2">Choose the time suited for you</p>
                </div>
                {/*=========================================================================================================  */}
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fw-bold">
                    What would you like to discuss?(In Brief)
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setDiscuss(e.target.value)}
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-primary onliyu"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <h6>{isSubmitting ? "Submitting..." : "Submit"}</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Session;
