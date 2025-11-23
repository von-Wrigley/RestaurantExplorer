import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

 

export async function proxy(request: NextRequest) {
 
  let response = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {data:user, error} = await supabase.auth.getUser()




  if(request.nextUrl.pathname.startsWith('/admin')){
       if(!user){
    console.log('problems with authentication')
    return NextResponse.redirect(new URL('/'))
  }
  const userRole= user?.user?.user_metadata?.role


  if(userRole !== 'admin'){

    return NextResponse.redirect(new URL('/', request.url))
  }

 
      
  }

  return response
}
 


export const config = {

}