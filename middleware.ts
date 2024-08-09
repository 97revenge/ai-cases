// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { router } from './route'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en'
})

export function middleware(request: NextRequest) {

  // const { nextUrl } = request
  // const pathName = nextUrl.pathname

  // if (pathName.startsWith(`${router.unmatchedRoute}`)) {
  //   return NextResponse.redirect(new URL("/pt/rights", nextUrl))
  // }


  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}