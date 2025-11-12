import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backend_url from '../Backendurl/url'

export default function Register() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await backend_url.post('/signup', { fullname, email, password })
      if (res.data.success) {
        alert('✅ Registration Successful!')
        navigate('/Login')
      } else {
        alert(res.data.message)
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Server Error')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white border border-black p-6 rounded-lg shadow-md w-[450px]">
        <h1 className="text-3xl font-semibold text-center mb-6">Register Form</h1>

        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Enter your name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">
          Register
        </button>

        <p className="text-sm text-center mt-4 text-gray-700">
          Already registered?{' '}
          <Link to="/Login" className="text-pink-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  )
}
