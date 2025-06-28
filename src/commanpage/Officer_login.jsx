
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function MainOfficial() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    captcha: '',
  });

  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Generate a 6-character alphanumeric CAPTCHA with both cases
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.captcha !== generatedCaptcha) {
      setError('❌ Invalid captcha. Please try again.');
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', payload);
      const token = res.data.access_token;

      console.log('✅ TOKEN:', token);
      localStorage.setItem('token', JSON.stringify(token));
      setMessage('✅ Login Successful!');
      setTimeout(() => navigate('/nicpioportal12/requests'), 1000);
    } catch (err) {
      console.error('Login failed:', err);
      setError('❌ Invalid email or password.');
    }
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
          style={{ borderBottom: '5px solid #0269bd', borderRadius: '15px' }}
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

            {message && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                {message}
              </div>
            )}

            {/* Email Input */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
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
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={generateCaptcha}
              >
                Refresh
              </button>
            </div>

            {/* Captcha Display */}
            <div className="text-center mb-3">
              <div
                style={{
                  background: 'linear-gradient(135deg, #c0e8ff, #5ba4ff)',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  display: 'inline-block',
                  letterSpacing: '6px',
                  borderRadius: '10px',
                  color: '#003366',
                  fontFamily: "'Courier New', Courier, monospace",
                  boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                {generatedCaptcha}
              </div>
              <div className="text-muted small mt-1">Enter the code shown above</div>
            </div>

            {/* Login Button */}
            <div className="text-center mb-3">
              <button
                type="submit"
                className="btn w-50 rounded-pill text-white"
                style={{ backgroundColor: '#1e90ff' }}
              >
                LOGIN
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center">
              <span className="me-1">Forgot Password?</span>
              <Link
                to="/reset-password"
                style={{ color: '#1e90ff', textDecoration: 'none' }}
              >
                Click Here to Reset
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainOfficial;
