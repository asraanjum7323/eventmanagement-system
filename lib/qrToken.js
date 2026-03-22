import crypto from "crypto"
const SECRET = process.env.QR_SECRET

export function generateQRToken(eventId, guestId) {
  const payload = `${eventId}:${guestId}`
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex")
  return Buffer.from(`${payload}:${sig}`).toString("base64")
}

export function verifyQRToken(token) {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf8")
    const [eventId, guestId, sig] = decoded.split(":")
    const expected = crypto.createHmac("sha256", SECRET).update(`${eventId}:${guestId}`).digest("hex")
    if (sig !== expected) return null
    return { eventId, guestId }
  } catch {
    return null
  }
}
