'use client'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if (res.error) {
        console.log('error')
        return
      }
      router.replace('/dashboard')
      e.target[0].value = ''
      e.target[1].value = ''
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-96 max-sm:w-80 flex flex-col p-8 max-sm:p-2  gap-4 shadow-2xl  border-t-4 border-green-400'
    >
      <h1>Enter the details </h1>
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
      <button className='btn btn-success text-white'>Login</button>
      <p>
        Don`t have an account?{' '}
        <Link
          className='link link-info hover:font-bold'
          href={'/register'}
        >
          Register
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
