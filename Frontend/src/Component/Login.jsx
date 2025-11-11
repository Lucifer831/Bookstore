import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form className="bg-white border border-black p-6 rounded-lg shadow-md w-[450px]">
        <h1 className="text-3xl font-semibold text-center mb-6">Login form</h1>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter ur Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex items-center mb-5">
          <input
            id="remember"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
          />
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
        >
          Submit
        </button>
        <p className='pt-6 pl-18'> Not Register? <span className='text-pink-300 underline'><Link to ="/Register">Register</Link> </span></p>
      </form>
    </div>
  )
}
