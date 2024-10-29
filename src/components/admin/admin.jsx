// import React, { useState } from 'react';
// import { BASEURL } from "../../BaseURL/BaseURL";
// import { FiEye , FiEyeOff } from "react-icons/fi";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Helmet } from 'react-helmet-async';


// const AdminLogin = () => {
//     const [email , setEmail] = useState('')
//     const [password, setPassword] = useState('');

//     let navigate =  useNavigate();

//      const handleSubmit = async (e) =>{
//      e.preventDefault();
//       const newUser = {
//       email,
//       password
//     }
//     try {
      
//       const res =  await axios.post(`${BASEURL}/api/v1/auth/login`, newUser, {headers:{"Content-Type":"application/json"}})
//       localStorage.setItem('token', JSON.stringify(res.data.access))
//       toast.success('Admin Login Successfully');
   
//       setTimeout(() =>{
//         navigate('/dashboard');
//       }, 1000);

//       setTimeout(() =>{
//         navigate(0)
//       }, 7000)
//     } catch (error) {
//       toast.error(error.response.data);
//     } 
// }
// return (
//         <>
//         <Helmet>
//         <meta name="robots" content="nonindex" />
//        </Helmet>
// {/* Header */}
// <div class="container-fluid bg-secondary py-5 " style={{height:"500px" , backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat:"no-repeat" , backgroundPosition:"center", backgroundSize:"cover"}}>
//  <div class="py-5 mt-5 ">
//    <h2 class=" mt-5 text-white text-center">Login</h2>
//    <h5 class=" mt-4 text-white text-center"></h5>
//    <p class="lead text-white text-center"></p>
//  </div>
// </div>
//     <div className="container mb-5" style={{marginTop:"70px", boxShadow:"rgba(0, 0, 0, 0.4) 0px 30px 90px"}} >
//     <div className="row">
//      <div className="col-md-7">
//      <form action="" onSubmit={handleSubmit} className='mx-auto '>
//       <h4 className='text-center mt-5 fw-bold'>Admin Login</h4>
//         <div class="mb-3 mt-5">
//             <label for="exampleInputEmail1" class="form-label fs-5 fw-bold "> Email </label>
//             <input type="email" class="form-control form-controli" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//             <div id="emailHelp" class="form-text fw-bold text-white ">We'll never share your email with anyone else.</div>
//         </div>

//         <div className="mb-3">
//             <label for="exampleInputPassword1" class="form-label fs-5 fw-bold ">Password</label>
//             <input type="password" class="form-control form-controli" value={password}  onChange={(e) => setPassword(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//         </div>
//         <button type="submit"  class="btn btn-danger pe-5 ps-5 btn-lg mt-4 mb-5"><h4>Login</h4></button>
//     </form>
//      </div>
//      <div className="col-md-5">
//         <div className="text-center">
//         <img src='https://i.stack.imgur.com/qq8AE.gif' data-src='https://res.cloudinary.com/elonatech/image/upload/v1709568938/adminPage/Elonatech_kpz74q.png' className='img-fluid rounded lazyload' alt="" />

//         </div>
//      </div>
//     </div>
   
//     </div>


            
//         </>
//     );
// }

// export default AdminLogin;



import React, { useState, useEffect } from 'react';
import { BASEURL } from "../../BaseURL/BaseURL";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import { useCookies } from 'react-cookie';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [cookies, setCookie] = useCookies(['authToken']);

    let navigate = useNavigate();

    useEffect(() => {
        // Check if the user is an admin based on the authToken cookie
        const checkAdminStatus = async () => {
            const isUserAdmin = await checkIfUserIsAdmin(cookies.authToken);
            setIsAdmin(isUserAdmin);
        };
        checkAdminStatus();
    }, [cookies.authToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password
        };
        try {
            const res = await axios.post(`${BASEURL}/api/v1/auth/login`, newUser, { headers: { "Content-Type": "application/json" } });
            localStorage.setItem('token', JSON.stringify(res.data.access));
            setCookie('authToken', res.data.access, { path: '/' });
            toast.success('Admin Login Successfully');

            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);

            setTimeout(() => {
                navigate(0);
            }, 7000);
        } catch (error) {
            toast.error(error.response.data);
        }
    };

    async function checkIfUserIsAdmin(authToken) {
        try {
            // Make a request to the server-side API to verify the admin status
            const response = await axios.post(`${BASEURL}/api/v1/auth/verify-admin`, { authToken });
            
            // Check the response from the server to determine if the user is an admin
            return response.data.isAdmin;
        } catch (error) {
            console.error('Error checking admin status:', error);
            return false;
        }
    }

    return (
        <>
            <Helmet>
                <meta name="robots" content="nonindex" />
            </Helmet>
            {/* Header */}
            <div className="container-fluid bg-secondary py-5" style={{ height: "500px", backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url()`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="py-5 mt-5">
                    <h2 className=" mt-5 text-white text-center">Login</h2>
                    <h5 className=" mt-4 text-white text-center"></h5>
                    <p className="lead text-white text-center"></p>
                </div>
            </div>
            <div className="container mb-5" style={{ marginTop: "70px", boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px" }}>
                <div className="row">
                    <div className="col-md-7">
                        <form action="" onSubmit={handleSubmit} className='mx-auto'>
                            <h4 className='text-center mt-5 fw-bold'>Admin Login</h4>
                            <div className="mb-3 mt-5">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-5 fw-bold"> Email </label>
                                <input type="email" className="form-control form-controli" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text fw-bold text-white">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label fs-5 fw-bold">Password</label>
                                <input type="password" className="form-control form-controli" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-danger pe-5 ps-5 btn-lg mt-4 mb-5"><h4>Login</h4></button>
                        </form>
                    </div>
                    <div className={`col-md-5 ${isAdmin ? '' : 'unselectable'}`}>
                        <div className="text-center">
                            <img src='https://i.stack.imgur.com/qq8AE.gif' data-src='https://res.cloudinary.com/elonatech/image/upload/v1709568938/adminPage/Elonatech_kpz74q.png' className='img-fluid rounded lazyload' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogin;
