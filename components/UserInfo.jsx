'use client'

import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Spinner from './Spinner'
export default function UserInfo() {
  const session = useSession()
  const router = useRouter()

  const logOut = () => {
    signOut
    router.replace('/')
  }
  if (session.status === 'loading') {
    return <Spinner />
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6'>
        <div>
          Name: <span className='font-bold'>{session?.data?.user.name}</span>
        </div>
        <div>
          Email: <span className='font-bold'>{session?.data?.user.email}</span>
        </div>
        <button
          onClick={logOut}
          className='bg-red-500 text-white font-bold px-6 py-2 mt-3'
        >
          Log Out
        </button>
      </div>
    </div>
  )
  // }
}
