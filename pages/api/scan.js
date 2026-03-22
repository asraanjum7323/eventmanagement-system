import prisma from '../../lib/prisma'
import { verifyQRToken } from '../../lib/qrToken'

export default async function handler(req,res){
  const {token,count} = req.body
  const verified = verifyQRToken(token)
  if(!verified) return res.json({message:"Invalid"})
  const guest = await prisma.guest.findUnique({where:{id:verified.guestId}, include:{scans:true}})
  const total = guest.scans.reduce((a,b)=>a+b.count,0)
  if(total+count > guest.allowedCount) return res.json({message:"RED Limit"})
  await prisma.guestScan.create({data:{guestId:guest.id,count}})
  res.json({message:"GREEN Allowed"})
}
