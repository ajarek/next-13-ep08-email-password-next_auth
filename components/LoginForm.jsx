import React from 'react'

const LoginForm = () => {
  return (
    <form className='w-96 flex flex-col p-8 gap-4 shadow-2xl'>
      <h1>Enter the details </h1>
      <input type="text" placeholder="Email" className="input input-bordered input-success w-full" />
      <input type="password" placeholder="Password" className="input input-bordered input-success w-full" />
      <button className="btn btn-success text-white">Login</button>
    </form>
  )
}

export default LoginForm