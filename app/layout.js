import './globals.css'
import { Inter } from 'next/font/google'
import navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Bugs | Pest Control',
  description: 'Pest Control in Austin, TX',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      </body>
    </html>
  )
}
