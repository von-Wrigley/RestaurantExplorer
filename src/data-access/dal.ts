import 'server-only'

import { cache } from 'react'
import { createClient } from '../../supabase/server'

 
export const verifySession = cache(async () => {
const supabase = await createClient()
const {data:user, error} = await supabase.auth.getUser() 




const element = user.user?.user_metadata.role
 console.log('Role   ', user.user?.user_metadata.role)
  console.log(user.user?.role)
console.log(user)
console.log({user})



return user
})