import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const navigate=useNavigate()
  return (
    <div className="flex h-screen w-full">
      {/* Left Image Section */}
      <div className="w-1/2 bg-[#7a1b2e] flex items-center justify-center">
        <img
          src="/singer2.png"
          alt="singer"
          className="w-[300px] h-[300px] object-contain"
        />
      </div>

      {/* Right Login Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center px-12 relative">

        {/* Top-right Sign Up */}
        <div className="absolute top-6 right-6 text-sm text-gray-600">
          Don't have a SonicBloom account yet?{' '}
          <button className="ml-2 border px-4 py-1 rounded-full hover:bg-gray-100"
          onClick={()=>navigate("/signup")}>
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Welcome to SonicBloom.</h1>
          <p className="text-gray-600 mb-6">Log in or sign up with your mobile number.</p>

          {/* Phone Input */}
          <div className="flex items-center border rounded-full overflow-hidden mb-4">
            <span className="px-4 text-lg">🇮🇳</span>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="flex-1 py-3 px-2 outline-none"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full bg-teal-400 hover:bg-teal-500 text-white py-3 rounded-full font-semibold mb-6">
            Continue
          </button>

          {/* Disclaimer */}
          <p className="text-sm text-gray-600 italic mb-6">
            Select ‘Continue’ to give consent to SonicBloom’s <span className="underline">Terms of Service</span> and acknowledge that you have read and understood the <span className="underline">Privacy Policy</span>. An SMS may be sent to authenticate your account, and message and data rates may apply.
          </p>

          <div className="flex items-center justify-center my-4 text-gray-500 text-sm">
            <hr className="w-1/4 border-t" />
            <span className="px-3">OR CONNECT WITH</span>
            <hr className="w-1/4 border-t" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800">
              <MdEmail size={18} /> Email
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#3b5998] text-white py-2 rounded-full text-sm hover:bg-[#2d4373]">
              <FaFacebookF size={18} /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
