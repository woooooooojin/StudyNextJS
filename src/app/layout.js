import './globals.css'


export const metadata = {
  title: 'Web Tutorial',
  description: 'study next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>
        <h1><a href='/'>web</a></h1>
        <ol>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
        </ol>
        {children}
        <ul>
          <li><a href='/create'>create</a></li>
          <li><a href='/update/1'>update</a></li>
          <li><input type='button' value='delete'></input></li>
        </ul>
        </body>
    </html>
  )
}
