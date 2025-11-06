"use server"

import { createClient } from "../../../supabase/server"

export async function signIn(previousState:any, formData:any) {

    const email = formData.get('email')
    const password = formData.get("password")

    const supabase = await createClient()

    try {
   const {error} = await supabase.auth.signInWithPassword({email, password})
     

        if(error){
        console.error(error)
         return;
  }
  return;
    } catch (error) {
        
    }

 
}