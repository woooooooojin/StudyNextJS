import Link from 'next/link'
import './globals.css'


export const metadata = {
  title: 'Web Tutorial',
  description: 'study next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <h1><Link href='/'>web</Link></h1>
        <ol>
          <li><Link href='/read/1'>html</Link></li>
          <li><Link href='/read/2'>css</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href='/create'>create</Link></li>
          <li><Link href='/update/1'>update</Link></li>
          <li><input type='button' value='delete'></input></li>
        </ul>
        </body>
    </html>
  )
}
