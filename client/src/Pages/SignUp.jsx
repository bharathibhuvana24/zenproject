import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl mb-5 text-center font-semibold'>Sign Up</h1>
    <form  className='flex flex-col gap-4 '>
      <input type="text"
        placeholder='Enter Your Name...'
        className='border p-3 rounded-lg'
        id='username'
         />

      <input type="email"
        placeholder='Enter your Email address...'
        className='border p-3 rounded-lg'
        id='email'
         />

      <input type="password"
        placeholder='Enter Your Password...'
        className='border p-3 rounded-lg'
        id='password'
         />

      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Register
      </button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to='/sign-in'>
        <span className='text-blue-500'>Sign in</span>
      </Link>
    </div>
    
  </div>

  )
}

export default SignUp