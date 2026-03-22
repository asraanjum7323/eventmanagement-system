import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const SECRET = process.env.JWT_SECRET

export function signToken(user) {
  return jwt.sign(user, SECRET, { expiresIn: "7d" })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}

export async function hashPassword(password) {
  return await bcrypt.hash(password, 10)
}

export async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash)
}
