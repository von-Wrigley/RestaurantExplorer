
'use client'
import { createClient } from "../../../supabase/supabase-client"


export const sendemail = async (email: string)=> {
    const supabase = createClient()
     const { error:magicError } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/restaurantDashboard`
    }
  })

 if (magicError){
  console.log(magicError.message)
 }
}