"use client";
import { signIn } from 'next-auth/react'
import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  }
  return (
    <form onSubmit={handleSubmit} className='w-96 max-sm:w-80 flex flex-col p-8 max-sm:p-2  gap-4 shadow-2xl  border-t-4 border-green-400'>
      <h1>Enter the details </h1>
      <input type="email" required placeholder="Email" className="input input-bordered input-success w-full" />
      <input type="password"  required placeholder="Password" className="input input-bordered input-success w-full" />
      <button className="btn btn-success text-white">Login</button>
      <p>Don`t have an account? <Link className="link link-info hover:font-bold" href={'/register'}>Register</Link></p>
    </form>
  )
}

export default LoginForm