import prisma from '../../lib/prisma'
import { generateQRToken } from '../../lib/qrToken'

export default async function handler(req,res){
  const {eventId,name} = req.body
  const guest = await prisma.guest.create({data:{eventId,name,allowedCount:5}})
  const token = generateQRToken(eventId,guest.id)
  res.json({token})
}
