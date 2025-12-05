"use server"

import { createClient } from "../../../supabase/server"

export async function signIn(previousState:any, formData:any) {
console.log('Ресторан пытается войти')
    const email = formData.get('email')
    const password = formData.get("password")

    const supabase = await createClient()

    try {
   const {error} = await supabase.auth.signInWithPassword({email, password})
     console.log('Ресторан вошел успешно')

        if(error){
          console.log('Ресторан не смог войти')
        console.error(error)
         return;
  }
  return;
    } catch (error) {
        
    }

 
}