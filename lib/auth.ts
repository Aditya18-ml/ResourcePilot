import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const SECRET = process.env.JWT_SECRET!

export const hashPassword = (password: string) => bcrypt.hash(password, 10)
export const comparePassword = (password: string, hash: string) => bcrypt.compare(password, hash)

export const signToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, SECRET, { expiresIn: '7d' })
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET) as { userId: string; role: string }
  } catch {
    return null
  }
}