import React from 'react'
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form className='w-96 max-sm:w-80 flex flex-col p-8 max-sm:p-2  gap-4 shadow-2xl  border-t-4 border-green-400'>
      <h1>Enter the details </h1>
      <input type="text" required placeholder="Full Name" className="input input-bordered input-success w-full" />
      <input type="email" required placeholder="Email" className="input input-bordered input-success w-full" />
      <input type="password"  required placeholder="Password" className="input input-bordered input-success w-full" />
      <button className="btn btn-success text-white">Register</button>
      <p>Already have an account? <Link className="font-bold border-b-2 border-solid border-blue-500 hover:text-blue-600" href={'/'}>Login</Link></p>
    </form>
  )
}

export default RegisterForm