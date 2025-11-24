'use server'
 

import { createAdminClient } from "../../../supabase/server-admin"
import { sendemail } from "./sendemail"

export async function SendInfo(id: any, email: any, name:string) {

    const supabase =  createAdminClient()
//Создаем ресторан
    const { data, error } = await supabase.auth.admin.createUser({
  email,
   email_confirm: true,
   user_metadata: {
   role: 'restaurant_owner',
   restaurant_name: name
   }
})
 if (error) throw error
//Создаем письмо
//Это ддля продакшена, потому что supabase.auth.admin.generateLink
//  const { error:magicError } = await supabase.auth.admin.generateLink({
//   type: 'magiclink',
//   email,
//   options: {
//     redirectTo: `${process.env.URL}/restaurantDashboard`
//   }
// })

 
 //Отправляем данные в таблицу

 const {   error: restaurantError } = await supabase
    .from('restaurants')
    .insert({
        res_name:name,
        email,
        owner_id: data.user.id,
    }) 
if (restaurantError) {
  console.error('Error creating restaurant:', restaurantError)
  return
}
 const { error:er } = await supabase
    .from('res_applications')
    .update({ status: 'idle' })
    .eq('res_email', email)
    .eq('status', 'pending')    

    if (er) {
  console.error('Error updating restaurants aplications: ', restaurantError)
  return
}

    
    
}
