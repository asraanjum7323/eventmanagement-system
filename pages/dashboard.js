import { useEffect,useState } from 'react'
export default function Dashboard(){
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    const i = setInterval(async()=>{
      const res = await fetch('/api/stats')
      const d = await res.json()
      setTotal(d.total)
    },2000)
    return ()=>clearInterval(i)
  },[])
  return <h1>Total Guests Arrived: {total}</h1>
}
