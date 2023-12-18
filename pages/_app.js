// /pages/_app.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="top"></div>
        <Component {...pageProps} />
      </body>  
    </html>
  )
}