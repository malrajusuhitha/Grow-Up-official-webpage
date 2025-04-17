
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/forgot-password', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.detail || 'Something went wrong.');
    }
  };

  return (
    <div className="mt-30 h-screen p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 border rounded mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleForgotPassword}
        className="w-full rounded-lg border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer hover:bg-[#4a5759]"
      >
        Send Reset Link
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ForgotPassword;