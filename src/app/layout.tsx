import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Max Chamberlain | Frontend',
  description: ' Max Chamberlain Frontend Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ maxWidth: '100vw' }}>
        <Header />
        {children}
      </body>
    </html>
  )
}
