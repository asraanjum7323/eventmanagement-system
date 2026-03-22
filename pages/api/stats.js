import prisma from '../../lib/prisma'
export default async function handler(req,res){
  const scans = await prisma.guestScan.findMany()
  const total = scans.reduce((a,b)=>a+b.count,0)
  res.json({total})
}
