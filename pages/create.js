export default function Create(){
  const create=async()=>{
    const res=await fetch('/api/event',{method:'POST'})
    const data=await res.json()
    alert("Event Created ID: "+data.id)
  }
  return <button onClick={create}>Create Event</button>
}
