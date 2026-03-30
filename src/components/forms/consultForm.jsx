import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { BASEURL } from '../../BaseURL/BaseURL';
import axios from 'axios';

const ConsultForm = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [occupation, setOccupation] = useState("");
    const [challenge, setChallenge] = useState("");
    const [business, setBusiness] = useState("");
    const [cost, setCost] = useState("");
    const [invest, setInvest] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // New state

    const handleChangeCost = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setCost(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable the button
        try {
            const newData = {
                name,
                email,
                occupation,
                challenge,
                business,
                cost,
                invest
            };
            
            const response = await axios.post(`${BASEURL}/api/v1/email/consult`, newData, { headers: { "Content-Type": "application/json" } });
            if (response) {
                toast.success('Consult Form Sent!!!');
                setTimeout(() => {
                    navigate(0);
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
            setError(error.response.data);
        } finally {
            setIsSubmitting(false); // Enable the button again
        }
    };

    return (
        <>
            <button className="btn btn-primary cvb border border-light text-light mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <h6 className="mt-1">Click Here</h6>
            </button>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4 fw-bold text-dark" id="exampleModalLabel">Free Consulting</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-dark">
                            <form>
                                <div className="mb-2 mt-4">
                                    <label htmlFor="name" className="form-label float-start fw-bold">Name<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" aria-describedby="nameHelp" />
                                    <label htmlFor="exampleInputEmail1" className="form-label float-start fw-bold mt-2">Email address<span className='text-danger'>*</span></label>
                                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">What do you do?<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setOccupation(e.target.value)} id="what" aria-describedby="whatHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">What challenges do you currently face?<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setChallenge(e.target.value)} id="what" aria-describedby="whatHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">What would you change in your business?<span className='text-danger'>*</span></label>
                                    <input type="text" className="form-control" onChange={(e) => setBusiness(e.target.value)} id="what" aria-describedby="whatHelp" />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">How much money does it cost you? (In NAIRA)<span className='text-danger'>*</span></label>
                                    <input className="form-control" onChange={handleChangeCost} />
                                    <label htmlFor="what" className="form-label float-start fw-bold mt-2">How much money are you willing to invest? (In NAIRA)<span className='text-danger'>*</span></label>
                                    <input type="number" className="form-control" onChange={(e) => setInvest(e.target.value)} id="what" aria-describedby="whatHelp" />
                                    <div id="emailHelp" className="form-text mt-2">We'll never share your email with anyone else.</div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} className="btn btn-danger" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConsultForm;
