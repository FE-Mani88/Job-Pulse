'use client';
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Phone, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .required('Phone is required')
      .matches(/^\d{11}$/, 'Phone must be 11 digits'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-green-100">
        <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-4">
          {/* Illustration */}
          <div className="hidden md:block md:w-1/2 p-8">
            <img
              src="/images/undraw_instant-analysis_vm8x.svg"
              alt="Signup Illustration"
              className="w-full min-h-[60vh] object-cover rounded-lg"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-green-200 relative overflow-hidden">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Welcome Back!
              </h1>
              <p className="text-gray-500 text-sm">Login to your account</p>
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-lime-500"></div>

            <Formik
              initialValues={{ phoneNumber: '', email: '', password: '' }}
              validationSchema={loginSchema}
              onSubmit={async (values) => {
                const loginRes = await fetch('http://localhost:3000/auth/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                  }),
                  credentials: 'include',
                });

                if (!loginRes.ok) {
                  return toast.error('Login failed. Please check your credentials.');
                }

                return toast.success('You Are Logged In Successfully');
              }}
            >
              {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => (
                <form className="space-y-5" onSubmit={handleSubmit}>
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
                      onBlur={handleBlur}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="text-red-500 text-sm mt-2">{errors.phoneNumber} <span className={values.phoneNumber.length == 11 ? 'text-green-500': 'text-red-400'}>({values.phoneNumber.length} / 11)</span></p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-green-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-gray-700 placeholder-gray-400"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>
                    )}
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
                      onBlur={handleBlur}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-green-400 cursor-pointer"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-sm mt-1.5">{errors.password}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
                  >
                    Login
                  </button>
                </form>
              )}
            </Formik>

            {/* Register Link */}
            <div className="text-center pt-2 text-sm space-y-2">
              <div>
                <span className="text-gray-600">Don't have an account?</span>
                <Link href="/signup" className="text-green-500 font-medium ml-1 hover:underline">
                  Register
                </Link>
              </div>
              <div className="bg-gray-400/70 w-full h-[0.5px]"></div>
              <div className="text-gray-600 text-sm text-center">
                <Link
                  href="/"
                  className="flex justify-center items-center gap-1.5 text-green-500 hover:underline group transition"
                >
                  Back to home page
                  <MoveRight className="transition w-4 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
