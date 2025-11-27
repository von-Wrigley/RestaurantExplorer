import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '../supabase/server'
import { verifySession } from './data-access/dal'


// const publicRoutes = [
// '/', '/auth', '/auth-admin', '/auth-restaurant', '/restaurants', '/restaurants/[slug]'
// ]


 

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/auth/callback') {
    console.log('↪️ Skipping middleware for auth callback')
    return NextResponse.next()
  }
  console.log('req  ', request)
//    const { searchParams } = new URL(request.url);
 
//   const token = searchParams.get('access_token')
//   const type = searchParams.get('type')
//   const next = searchParams.get("next") ?? "/restaurantDashboard";

// console.log('token', token)
// console.log('next', next)

  let response = NextResponse.next({
    request,
  })

  const supabase =await createClient()
  //  надо сделать через дал
// verifySession()
  const {data:user, error} = await supabase.auth.getUser()
  const userRole= user?.user?.user_metadata?.role
 console.log('userRole1 ' , user)




  if(request.nextUrl.pathname.startsWith('/admin')){
       if(!user){
    console.log('problems with authentication')
    return NextResponse.redirect(new URL('/'))
  }
  if(userRole !== 'admin'){
    return NextResponse.redirect(new URL('/', request.url))
  }
  }

  if(request.nextUrl.pathname.startsWith('/profile')){
    console.log('profile')
       if(!user){
    console.log('problems with authentication')
    return NextResponse.redirect(new URL('/'))
  }
  if(userRole !== 'user' && userRole !== 'admin'){
    return NextResponse.redirect(new URL('/', request.url))
  }
  }

  if(request.nextUrl.pathname.startsWith('/restaurantDashboard')){
    console.log('restaurantDashboard  ', userRole)

       if(!user){
    console.log('problems with authentication')
    return NextResponse.redirect(new URL('/'))
  }

 


  if(userRole !== 'restaurant_owner' && userRole !== 'admin'){
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  }


  return response
}
 


 export const config = {
          matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
        };