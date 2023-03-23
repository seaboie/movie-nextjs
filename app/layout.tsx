import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-montserrat"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-20 my-12`}>
        <nav>
          <h1 className='text-4xl font-bold'><a href="/">Logo</a></h1>
          <ul className='flex flex-col'>
            <li><a href="/about">About</a></li>
            <li><a href="">Product</a></li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  )
}
