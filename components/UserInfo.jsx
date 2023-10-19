'use client'

import React from 'react'
import { useRouter, useParams } from 'next/navigation'
const UserInfo = () => {
  const params = useParams()
  const router = useRouter()

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>
          lol
        </h2>
        <p>
          email: <span>lol@wp.pl</span>
        </p>

        <div className='card-actions justify-end'>
          <button
            onClick={() => router.push('/')}
            className='btn btn-error'
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
