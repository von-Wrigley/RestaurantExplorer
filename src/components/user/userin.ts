'use server'

import { redirect } from "next/navigation"
import { createClient } from "../../../supabase/server"


export const userin =async (prev, formData)=> {
 const email= formData.get('email')
const password= formData.get('password')


 const supabase = await createClient()
 const {  error, } = await supabase.auth.signInWithPassword({
  email,
  password,
})
if(error){
    console.log('Error in signin user. ',error.message )
}
redirect('/profile')
}