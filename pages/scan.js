import { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default function Scan(){
  const [msg,setMsg]=useState("")
  useEffect(()=>{
    const scanner = new Html5QrcodeScanner("reader",{fps:10,qrbox:250})
    scanner.render(async (text)=>{
      const res = await fetch('/api/scan',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({token:text,count:1})
      })
      const d = await res.json()
      setMsg(d.message)
    })
  },[])
  return <div><div id="reader"></div><h2>{msg}</h2></div>
}
