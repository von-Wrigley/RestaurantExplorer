'use server'
 
import { createClient } from "../../../supabase/server"

export async function SendInfo(id: any, email: any) {

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})

    try{
    const {data, error} = await supabase.from('restaurants').insert({id, email}).select()
      if(error){
        console.log('Error in sending in restaurants table from admin. ' , error.message)
        return
      }

      console.log('загляни в таблицу рсеторан')
    } catch(error){
        console.log(error) 
    }
    
}