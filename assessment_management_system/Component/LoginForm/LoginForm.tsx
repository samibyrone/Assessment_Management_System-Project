import React, { useState } from 'react';
import { BookOpen } from "lucide-react";
import { handleLogin, handleGoogleAuth } from "./Auth";
import { handleSignup, handleGoogleAuthSignup } from "../SignUpForm/SignupAuth";
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Talent");
  const router = useRouter();

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-2xl shadow-xl p-8 w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className='bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
            <BookOpen className='w-8 h-8' />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>AMS Hub</h1>
          <p className='text-gray-600 mt-2'>
            {isLogin ? "Welcome back!" : "Create your account"}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isLogin) {
              handleLogin(email, password, role, router);
            } else {
              handleSignup(username, email, password, role, router);
            }
          }}
        >
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                title='Select user role'
              >
                <option value='educator'>Talent</option>
              </select>
            </div>

            {!isLogin && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Username
                </label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  placeholder='Enter your username'
                  required
                />
              </div>
            )}

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='Enter your email'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder='Enter your password'
                required
              />
            </div>

            <button
              type='submit'
              className='w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium'
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <button
            type='button'
            onClick={() => {
              if (isLogin) {
                handleGoogleAuth(role, router);
              } else {
                handleGoogleAuthSignup(role, router);
              }
            }}
            className='mt-4 w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2'
          >
            <svg className='w-5 h-5' viewBox='0 0 24 24'>
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className='mt-6 text-center text-sm text-gray-600'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type='button'
            onClick={() => setIsLogin(!isLogin)}
            className='text-indigo-600 hover:text-indigo-500 font-medium'
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
