'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Eye, EyeOff, Phone, ChevronRight, ArrowBigRight, ArrowRight, LucideArrowDownRightFromSquare, MoveRight } from 'lucide-react';
import { Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-green-100">
        <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-4">
          {/* Illustration */}
          <div className="hidden md:block md:w-1/2 pr-8">
            <img
              src="/images/undraw_career-progress_vfq5.svg"
              alt="Signup Illustration"
              className="w-full min-h-[60vh] object-cover rounded-lg"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-green-200 relative overflow-hidden">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Create An Account
              </h1>
              <p className="text-gray-500 text-sm">Join to our community</p>
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500"></div>

            <Formik
              initialValues={{ username: '', phoneNumber: '', email: '', password: '' }}
              onSubmit={async (values) => {
                if (!values.username || values.phoneNumber.length < 11 || values.email.length < 6 || !values.password) {
                  return toast.error('Please fill all inputs correctly :)')
                }

                // Register Request
                const registerRes = await fetch('http://localhost:3000/auth/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    phone: values.phoneNumber,
                    role: 'job_seeker'
                  }),
                  credentials: 'include'
                })
                ////////////////////

                if (!registerRes.ok) {
                  console.log('Register Data => ', await registerRes.json())
                  return toast.error('Unexpected error in register :(')
                }

                // Login Request
                setTimeout(async () => {
                  const loginRes = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email: values.email,
                      password: values.password,
                    }),
                    credentials: 'include'
                  })
                  ////////////////

                  if (!loginRes.ok) {
                    return toast.error('Unknown register error')
                  }

                  return toast.success('You Are Registered Successfully')
                }, 1000)

              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-green-400" />
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-gray-700 placeholder-gray-400"
                      onChange={handleChange}
                      value={values.username}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-green-400" />
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-gray-700 placeholder-gray-400"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-green-400" />
                    <input
                      name="email"
                      placeholder="Email"
                      className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-gray-700 placeholder-gray-400"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-green-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-gray-700 placeholder-gray-400"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-green-400 cursor-pointer"
                    >
                      {!showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 cursor-pointer rounded-lg hover:opacity-90 transition"
                  >
                    Register
                  </button>
                </form>
              )}
            </Formik>

            {/* Login Link */}
            <div className="text-center pt-2 text-sm space-y-2">
              <div>
                <span className="text-gray-600">Already have an account?</span>
                <Link href="/signin" className="text-green-500 font-medium ml-1 hover:underline">
                  Login
                </Link>
              </div>
              <div className='bg-gray-400/70 w-full h-[0.5px]'></div>
              <div className='text-gray-600 text-sm text-center'><Link href='/' className='flex justify-center items-center gap-1.5 text-green-500 hover:underline group transition'>back to home page <MoveRight className='transition w-4 group-hover:translate-x-1' /></Link></div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer draggable={true} />
    </>
  );
}