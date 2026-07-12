import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

const publicRoutes = ['/login', '/signup', '/api/auth/login', '/api/auth/signup']

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (publicRoutes.includes(path)) return NextResponse.next()

  const token = request.cookies.get('token')?.value
  const user = verifyToken(token || '')

  if (!user) {
    const url = new URL('/login', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico|api/health).*)']
}