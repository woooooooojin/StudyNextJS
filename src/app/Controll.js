"use client"
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Controll() {
  const params = useParams()
  const id = params.id
  const router = useRouter()
  return (
    <ul>
      <li><Link href='/create'>create</Link></li>
      {id ? 
      <>
      <li><Link href={"/update/"+id}>update</Link></li>
      <li><input type='button' value='delete' onClick={()=>{

        const option = {method : 'DELETE'}

        fetch('http://localhost:9999/topics/'+id, option)
        .then(resp=>resp.json())
        .then(restut=>{
          router.push('/')
          router.refresh()
        })
      }}></input></li>
      </> : null}
      
    </ul>
  );
}
