import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '../supabase/server';
import { verifySession } from './data-access/dal';

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
// const publicRoutes = [
// '/', '/auth', '/auth-admin', '/auth-restaurant', '/restaurants', '/restaurants/[slug]'
// ]
const intlProxy = createMiddleware(routing);
export default intlProxy;

export async function proxy(request: NextRequest) {
  const prefLang = request.nextUrl.pathname.split('/')[1];
  console.log(prefLang, 'prefLang');
  if (request.nextUrl.pathname === '/auth/callback') {
    console.log('↪️ Skipping middleware for auth callback');
    return NextResponse.next();
  }

  console.log('req  ', request.nextUrl.pathname.split('/')[1]);
  const { searchParams } = new URL(request.url);

  const token = searchParams.get('access_token');
  //   const type = searchParams.get('type')
  //   const next = searchParams.get("next") ?? "/restaurantDashboard";

  console.log('token', token);
  // console.log('next', next)

  const response = NextResponse.next({
    request,
  });

  const supabase = await createClient();
  //  надо сделать через дал
  // verifySession()
  const { data: user, error } = await supabase.auth.getUser();
  console.log('user', error);
  const userRole = user?.user?.user_metadata?.role;
  console.log('userRole1 ', user);

  if (!prefLang) {
    return intlProxy(request);
  }

  if (request.nextUrl.pathname.startsWith(`/${prefLang}/admin`)) {
    if (!user) {
      console.log('problems with authentication');
      return NextResponse.redirect(new URL(`/${prefLang}`));
    }
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL(`/${prefLang}`, request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith(`/${prefLang}/profile`)) {
    console.log('profile');
    if (!user) {
      console.log('problems with authentication');
      return NextResponse.redirect(new URL(`/${prefLang}`));
    }
    if (userRole !== 'user' && userRole !== 'admin') {
      return NextResponse.redirect(new URL(`/${prefLang}`, request.url));
    }
  }

  if (
    request.nextUrl.pathname.startsWith(`/${prefLang}/restaurantDashboard`) ||
    request.nextUrl.pathname.startsWith(`/${prefLang}/restaurantDashboard/menu`) ||
    request.nextUrl.pathname.startsWith(`/${prefLang}/restaurantDashboard/description`)
  ) {
    console.log('restaurantDashboard  ', userRole);

    if (!user) {
      console.log('problems with authentication');
      return NextResponse.redirect(new URL(`/${prefLang}`));
    }

    if (userRole !== 'restaurant_owner' && userRole !== 'admin') {
      return NextResponse.redirect(new URL(`/${prefLang}`, request.url));
    }
  }

  response.headers.set('x-locale', prefLang);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
    // '/(en|ru|es)/:path*',
    // '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
    // '/((?!api|trpc|_next|_vercel|_next/static|_next/image|favicon.ico).*)'
  ],
};
