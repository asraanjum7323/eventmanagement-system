import { useState } from 'react'
import QRCode from 'qrcode'

export default function Event(){
  const [eventId,setEventId]=useState("")
  const [name,setName]=useState("")
  const [qr,setQr]=useState("")

  const addGuest=async()=>{
    const res=await fetch('/api/guest',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({eventId,name})
    })
    const d = await res.json()
    const qrImg = await QRCode.toDataURL(d.token)
    setQr(qrImg)
  }

  return (
    <div>
      <input placeholder="Event ID" onChange={e=>setEventId(e.target.value)}/>
      <input placeholder="Guest Name" onChange={e=>setName(e.target.value)}/>
      <button onClick={addGuest}>Generate QR</button>
      {qr && <img src={qr}/>}
    </div>
  )
}
