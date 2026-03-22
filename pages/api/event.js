import prisma from '../../lib/prisma'
export default async function handler(req,res){
  const event = await prisma.event.create({data:{name:"Event",date:new Date()}})
  res.json(event)
}
