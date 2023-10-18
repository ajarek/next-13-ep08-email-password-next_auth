'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      if (res.ok) {
        const form = e.target
        form.reset()
        router.push('/')
      } else {
        console.log('User registration failed.')
      }
    } catch (error) {
      console.log('Error during registration: ', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-96 max-sm:w-80 flex flex-col p-8 max-sm:p-2  gap-4 shadow-2xl  border-t-4 border-green-400'
    >
      <h1>Enter the details </h1>
      <input
        type='text'
        required
        placeholder='Full Name'
        className='input input-bordered input-success w-full'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        required
        placeholder='Email'
        className='input input-bordered input-success w-full'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        required
        placeholder='Password'
        className='input input-bordered input-success w-full'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='btn btn-success text-white'>Register</button>
      <p>
        Already have an account?{' '}
        <Link
          className='link link-info hover:font-bold'
          href={'/'}
        >
          Login
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm
