import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Authentication:Email/Password ',
  description:
    'Authentication: Custom Email/Password with NextAuth.js & MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
