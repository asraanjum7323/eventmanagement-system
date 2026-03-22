import Link from 'next/link'
export default function Home(){
  return (
    <div style={{padding:20}}>
      <h1>EventManagement System</h1>
      <Link href="/create">Create Event</Link><br/>
      <Link href="/event">Add Guest + QR</Link><br/>
      <Link href="/scan">Scanner</Link><br/>
      <Link href="/dashboard">Dashboard</Link><br/>
      <Link href="/login">Staff Login</Link>
    </div>
  )
}
