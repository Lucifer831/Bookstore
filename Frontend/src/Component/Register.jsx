import React from 'react'
import { Link } from 'react-router-dom'   // ✅ import added

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form className="bg-white border border-black p-6 rounded-lg shadow-md w-[450px]">
        <h1 className="text-3xl font-semibold text-center mb-6">Register Form</h1>

        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
        >
          Register
        </button>

        {/* Already have account */}
        <p className="text-sm text-center mt-4 text-gray-700">
          Already registered?{" "}
          <Link to="/Login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
