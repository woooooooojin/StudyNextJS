
import Link from 'next/link'
import './globals.css'
import { Controll } from './Controll'


export const metadata = {
  title: 'Web Tutorial',
  description: 'study next.js',
}

export default async function RootLayout({ children }) {
      
  //서버에서 데이터를 가져옴
  const resp = await  fetch(process.env.NEXT_PUBLIC_API_URL+'topics',{ cache : 'no-cache' }) //revalidate : 0 
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
        <Controll/>
        
        </body>
    </html>
  )
}
