import { useState } from 'react'
export default function Login(){
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const login=async()=>{
    const res=await fetch('/api/auth',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,password:pass})
    })
    const d=await res.json()
    alert(d.message)
  }
  return (
    <div>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)}/>
      <button onClick={login}>Login</button>
    </div>
  )
}
