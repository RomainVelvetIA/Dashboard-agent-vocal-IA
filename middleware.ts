import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

// Middleware d'authentification pour protéger les routes
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Passage direct sans vérification d'authentification (temporaire)
  return res
  
  /* Code original commenté
  const supabase = createMiddlewareClient({ req, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isAuthPage = req.nextUrl.pathname === '/login'
  
  if (!session && !isAuthPage) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return res
  */
}

// Configurer les chemins qui doivent passer par le middleware
export const config = {
  matcher: [
    /*
     * Match tous les chemins sauf:
     * 1. Les fichiers statiques (images, scripts, etc.)
     * 2. Les chemins API publics qui ne nécessitent pas d'authentification
     */
    '/((?!_next/static|_next/image|favicon.ico|api/public).*)',
  ],
} 