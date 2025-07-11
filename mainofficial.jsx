// import React from 'react';


// function MainOfficial() {
//   return (
//     <div
//       className="main"
//       style={{
//     backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="container mt-xl-0 mb-5 my-lg-5">
//         <div className="form-title text-center pt-3 mb-3 mb-md-4">
//           <h3 className="primary d-none d-md-block">Official Login</h3>
//           <h3 className="primary d-md-none fs-6">Official Login</h3>
//         </div>

//         <div
//           className="card m-auto bg-light col-11 col-md-8 col-lg-6 col-xl-4"
//           style={{
//             boxShadow: '0 0 10px 2px rgba(100, 100, 100, 0.3)',
//             borderBottom: '5px solid #0269bd',
//             borderRadius: '15px',
//           }}
//         >
//           <form
//             className="p-3 p-lg-4"
//             method="POST"
//             encType="multipart/form-data"
//             autoComplete="off"
//           >
//             <div
//               className="alert alert-danger alert-dismissible fade show d-none"
//               role="alert"
//             >
//               <span className="f-sm-small"></span>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="alert"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="input-group mb-3">
//               <span className="input-group-text justify-content-center primary-bg col-md-2 d-flex align-items-center">
//                 <i className="fa fa-user fs-md-3 fs-5 p-1"></i>
//               </span>
//               <input
//                 type="text"
//                 className="form-control col-md-10 f-sm-small required"
//                 name="username"
//                 id="username"
//                 placeholder="Enter Username"
//                 required
//               />
//               <div className="invalid-feedback f-sm-small">
//                 Please enter a valid username.
//               </div>
//             </div>

//             <div className="input-group mb-3">
//               <span className="input-group-text justify-content-center primary-bg col-md-2 d-flex align-items-center">
//                 <i className="fa fa-lock fs-md-3 fs-5 p-1"></i>
//               </span>
//               <input
//                 type="password"
//                 className="form-control col-md-10 f-sm-small required"
//                 name="password"
//                 id="password"
//                 placeholder="Enter Password"
//                 required
//               />
//               <div className="invalid-feedback f-sm-small">
//                 Please enter a valid password.
//               </div>
//             </div>

//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 className="form-control col-md-10 f-sm-small required"
//                 name="captcha"
//                 id="captcha"
//                 placeholder="Enter Captcha Code"
//                 required
//               />
//               <div className="invalid-feedback f-sm-small"></div>
//             </div>

//             <div className="form-group text-center mb-3">
//               <button
//                 type="submit"
//                 name="submit"
//                 className="btn primary-bg w-50 fw-medium rounded-5 f-sm-small btn-secondary"
//               >
//                 LOGIN
//               </button>
//             </div>

//             <div className="form-group text-center f-sm-small">
//               <div>
//                 Forgot Password?{' '}
//                 <span className="fw-medium text-primary cursor-pointer">
//                   Click Here to Reset
//                 </span>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainOfficial;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function MainOfficial() {
//   const [formData, setFormData] = useState({ username: '', password: '', captcha: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError(''); // Clear error on change
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy login validation
//     if (formData.username === 'admin' && formData.password === 'password' && formData.captcha === '1234') {
//       alert('Login successful!');
//     } else {
//       setError('Invalid credentials or captcha.');
//     }
//   };

//   const handleResetPassword = () => {
//     navigate('/reset-password'); // Make sure this route exists in your app
//   };

//   return (
//     <div
//       className="main"
//       style={{
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="container mt-xl-0 mb-5 my-lg-5">
//         <div className="form-title text-center pt-3 mb-3 mb-md-4">
//           <h3 className="primary d-none d-md-block">Official Login</h3>
//           <h3 className="primary d-md-none fs-6">Official Login</h3>
//         </div>

//         <div
//           className="card m-auto bg-light col-11 col-md-8 col-lg-6 col-xl-4"
//           style={{
//             boxShadow: '0 0 10px 2px rgba(100, 100, 100, 0.3)',
//             borderBottom: '5px solid #0269bd',
//             borderRadius: '15px',
//           }}
//         >
//           <form className="p-3 p-lg-4" onSubmit={handleSubmit}>
//             {error && (
//               <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                 <span className="f-sm-small">{error}</span>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setError('')}
//                   aria-label="Close"
//                 ></button>
//               </div>
//             )}

//             <div className="input-group mb-3">
//               <span className="input-group-text primary-bg col-md-2 d-flex align-items-center justify-content-center">
//                 <i className="fa fa-user fs-md-3 fs-5 p-1"></i>
//               </span>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control"
//                 placeholder="Enter Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group mb-3">
//               <span className="input-group-text primary-bg col-md-2 d-flex align-items-center justify-content-center">
//                 <i className="fa fa-lock fs-md-3 fs-5 p-1"></i>
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 name="captcha"
//                 className="form-control"
//                 placeholder="Enter Captcha Code"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* You can add your backend-generated captcha image here */}
//             <div className="text-center mb-3">
//               <img src="/captcha.jpg" alt="captcha" style={{ height: '40px' }} />
//               <div className="text-muted small">Enter the code shown above</div>
//             </div>

//             <div className="form-group text-center mb-3">
//               <button type="submit" className="btn primary-bg w-50 fw-medium rounded-5 btn-secondary">
//                 LOGIN
//               </button>
//             </div>

//             <div className="form-group text-center f-sm-small">
//               Forgot Password?{' '}
//               <span className="fw-medium text-primary cursor-pointer" onClick={handleResetPassword}>
//                 Click Here to Reset
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainOfficial;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function MainOfficial() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     captcha: '',
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Dummy validation
//     if (
//       formData.username === 'admin' &&
//       formData.password === 'password' &&
//       formData.captcha === '1234'
//     ) {
//       alert('Login successful!');
//       // You can navigate to dashboard or home here
//     } else {
//       setError('Invalid credentials or captcha.');
//     }
//   };

//   const handleResetPassword = () => {
//     navigate('/reset-password');
//   };

//   return (
//     <div
//       className="main"
//       style={{
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         paddingTop: '50px',
//       }}
//     >
//       <div className="container">
//         <div className="form-title text-center pt-3 mb-4">
//           <h3>Official Login</h3>
//         </div>

//         <div
//           className="card m-auto bg-light col-11 col-md-8 col-lg-6 col-xl-4"
//           style={{
//             boxShadow: '0 0 10px rgba(0,0,0,0.2)',
//             borderBottom: '5px solid #0269bd',
//             borderRadius: '15px',
//           }}
//         >
//           <form className="p-4" onSubmit={handleSubmit}>
//             {error && (
//               <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                 {error}
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setError('')}
//                   aria-label="Close"
//                 ></button>
//               </div>
//             )}

//             <div className="input-group mb-3">
//               <span className="input-group-text">
//                 <i className="fa fa-user"></i>
//               </span>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control"
//                 placeholder="Enter Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group mb-3">
//               <span className="input-group-text">
//                 <i className="fa fa-lock"></i>
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 name="captcha"
//                 className="form-control"
//                 placeholder="Enter Captcha Code"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="text-center mb-3">
//               <img src="/captcha.jpg" alt="Captcha" style={{ height: '40px' }} />
//               <div className="text-muted small">Enter the code shown above</div>
//             </div>

//             <div className="text-center mb-3">
//               <button type="submit" className="btn btn-primary w-50">
//                 LOGIN
//               </button>
//             </div>

//             <div className="text-center">
//               <span>Forgot Password? </span>
//               <button
//                 type="button"
//                 onClick={handleResetPassword}
//                 className="btn btn-link p-0"
//               >
//                 Click Here to Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainOfficial;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function MainOfficial() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     captcha: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       formData.username === 'admin' &&
//       formData.password === 'password' &&
//       formData.captcha === '1234'
//     ) {
//       alert('Login successful!');
//       // navigate('/dashboard') if needed
//     } else {
//       setError('Invalid credentials or captcha.');
//     }
//   };

//   const handleResetPassword = () => {
//     navigate('/reset-password');
//   };

//   return (
//     <div
//       className="main"
//       style={{
//         backgroundColor: '#f5f5f5',
//         minHeight: '100vh',
//         paddingTop: '60px',
//         paddingBottom: '60px',
//       }}
//     >
//       <div className="container">
//         <div className="text-center mb-4">
//           <h3>Official Login</h3>
//         </div>

//         <div
//           className="card bg-white shadow mx-auto p-4 col-11 col-md-8 col-lg-6 col-xl-4"
//           style={{
//             borderBottom: '5px solid #0269bd',
//             borderRadius: '15px',
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             {error && (
//               <div className="alert alert-danger alert-dismissible fade show" role="alert">
//                 {error}
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setError('')}
//                   aria-label="Close"
//                 ></button>
//               </div>
//             )}

//             {/* Username */}
//             <div className="input-group mb-3">
//               <span className="input-group-text">
//                 <i className="fa fa-user"></i>
//               </span>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control"
//                 placeholder="Enter Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="input-group mb-3">
//               <span className="input-group-text">
//                 <i className="fa fa-lock"></i>
//               </span>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Enter Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Captcha Input */}
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 name="captcha"
//                 className="form-control"
//                 placeholder="Enter Captcha Code"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Captcha Image (change src to /captcha.jpg if you have it in public/) */}
//             <div className="text-center mb-3">
//               <img
//                 src="https://via.placeholder.com/150x40?text=1234"
//                 alt="captcha"
//                 style={{ height: '40px' }}
//               />
//               <div className="text-muted small">Enter the code shown above</div>
//             </div>

//             {/* Submit */}
//             <div className="text-center mb-3">
//               <button type="submit" className="btn btn-primary w-50 rounded-pill">
//                 LOGIN
//               </button>
//             </div>

//             {/* Forgot Password */}
//             <div className="text-center">
//               <button
//                 type="button"
//                 className="btn btn-link text-decoration-none"
//                 onClick={handleResetPassword}
//               >
//                 Forgot Password? Click Here to Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainOfficial;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainOfficial() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captcha: '',
  });

  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username === 'admin' &&
      formData.password === 'password' &&
      formData.captcha === generatedCaptcha
    ) {
      alert('Login successful!');
      // navigate('/dashboard') if needed
    } else {
      setError('Invalid credentials or CAPTCHA.');
    }
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        paddingTop: '60px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h3>Official Login</h3>
        </div>

        <div
          className="card bg-white shadow mx-auto p-4 col-11 col-md-8 col-lg-6 col-xl-4"
          style={{
            borderBottom: '5px solid #0269bd',
            borderRadius: '15px',
          }}
        >
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError('')}
                  aria-label="Close"
                ></button>
              </div>
            )}

            {/* Username */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa fa-user"></i>
              </span>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Captcha Input */}
            <div className="input-group mb-3">
              <input
                type="text"
                name="captcha"
                className="form-control"
                placeholder="Enter Captcha Code"
                value={formData.captcha}
                onChange={handleChange}
                required
              />
            </div>

            {/* Captcha Image */}
            <div className="text-center mb-3">
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  background: '#e0e0e0',
                  padding: '10px',
                  display: 'inline-block',
                  borderRadius: '5px',
                }}
              >
                {generatedCaptcha}
              </div>
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={generateCaptcha}
              >
                Refresh Captcha
              </button>
              <div className="text-muted small">Enter the code shown above</div>
            </div>

            {/* Submit */}
            <div className="text-center mb-3">
              <button type="submit" className="btn btn-primary w-50 rounded-pill">
                LOGIN
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={handleResetPassword}
              >
                Forgot Password? Click Here to Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainOfficial;

