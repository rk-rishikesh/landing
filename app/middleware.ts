import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  const hostname = req.headers.get('host')?.split(':')[0] || ''

  // Define your base domain
  const rootDomain = 'loops.house'
  
  // Determine if this request should go to the app experience
  const isAppHost =
    hostname === `app.${rootDomain}` ||
    hostname === 'app.localhost' ||
    (hostname === 'localhost' && url.pathname.startsWith('/app'))

  // 1. Handle app.loops.house (and local equivalents)
  if (isAppHost) {
    // Rewrite the URL to point to the (app-site) group under /app
    const appPath = url.pathname === '/' ? '/app' : `/app${url.pathname}`
    return NextResponse.rewrite(new URL(`/(app-site)${appPath}`, req.url))
  }

  // 2. Handle the main loops.house
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}