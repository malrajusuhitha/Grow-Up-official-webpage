
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam) setToken(tokenParam);
  }, []);

  const handleReset = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/reset-password', {
        token,
        new_password: newPassword,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.detail || 'Failed to reset password.');
    }
  };

  return (
    <div className=" mt-30 h-screen p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        className="w-full p-2 border rounded mb-2"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        onClick={handleReset}
        className="w-full rounded-lg border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer hover:bg-[#4a5759]"
      >
        Reset Password
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default ResetPassword;