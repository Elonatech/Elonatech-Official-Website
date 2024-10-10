import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASEURL } from '../../BaseURL/BaseURL';
import { useNavigate } from 'react-router-dom';

const CallBackForm = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // New loading state

    const handleChangeNumber = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setNumber(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true

        try {
            const newData = {
                name,
                email,
                subject,
                number,
                message,
            };

            const response = await axios.post(`${BASEURL}/api/v1/email/contact`, newData, { headers: { "Content-Type": "application/json" } });
            if (response) {
                toast.success('Contact Form Sent!!!');
                setTimeout(() => {
                    navigate(0);
                }, 1000);
            }
        } catch (error) {
            toast.error(error.response.data);
        } finally {
            setLoading(false); // Reset loading state after the request
        }
    };

    return (
        <>
            <button className="btn btn-primary cvb border border-light text-light mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                <h6 className="mt-1">Click Here</h6>
            </button>
            {/* ================================================ body  ============================================== */}
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4 fw-bold text-dark" id="exampleModalLabel">Get in Touch with us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark">
                            <form>
                                <div className="mb-2 mt-4">
                                    <label htmlFor="name" className="form-label float-start fw-bold">Name<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" aria-describedby="nameHelp" />
                                    <label htmlFor="exampleInputEmail1" className="form-label float-start fw-bold mt-2">Email<span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">Subject<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setSubject(e.target.value)} id="what" aria-describedby="whatHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">Phone Number<span className='text-danger'>*</span></label>
                                    <input className="form-control" id="what" value={number} onChange={handleChangeNumber} />
                                    <div className='mt-3'>
                                        <h6 className='text-start fw-bold'>Message<span className='text-danger'>*</span></h6>
                                    </div>
                                    <div className='mt-2'>
                                        <ReactQuill
                                            theme="snow"
                                            className=''
                                            placeholder="Message"
                                            style={{ height: "100px" }}
                                            onChange={(value) => setMessage(value)}
                                        />
                                    </div>
                                    <div id="emailHelp" style={{ color: "transparent" }} className="form-text mt-2">We'll never share your email with anyone else.</div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} className="btn btn-primary" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CallBackForm;
