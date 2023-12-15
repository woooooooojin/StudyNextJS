// "use client";

import Link from 'next/link'
import './globals.css'


export const metadata = {
  title: 'Web Tutorial',
  description: 'study next.js',
}

export default async function RootLayout({ children }) {
      
  //서버에서 데이터를 가져옴
  const resp = await  fetch('http://localhost:9999/topics',{ cache : 'no-cache' }) //revalidate : 0 
  const topics = await resp.json()


  return (
    <html lang='ko'>
      <body>
        <h1><Link href='/'>web</Link></h1>
        <ol>
          {
            topics.map((topic)=>{
              return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
            })
          }
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
