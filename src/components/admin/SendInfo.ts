'use server'
 

import { createAdminClient } from "../../../supabase/server-admin"


export async function SendInfo(id: any, email: any, name:string) {

    const supabase =  createAdminClient()



        const { data:dataInv, error:errorInvite } = await supabase.auth.admin.inviteUserByEmail(email, {
        
        data: {
            role: 'restaurant_owner',
            restaurant_name: name
        },

        redirectTo: 'http://localhost:3000/auth/callback?next=/restaurantDashboard'
    })

    console.log("dataInv ", dataInv)
     console.log("errorInvite ", errorInvite)


    if (errorInvite) {
        console.error('Invitation error:', errorInvite)
        throw errorInvite
    }
  
 //Отправляем данные в таблицу

 const {   error: restaurantError } = await supabase
    .from('restaurants')
    .insert({
        res_name:name,
        email,
        owner_id: dataInv.user.id,
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

  //       const { error:magicError } = await supabase.auth.signInWithOtp({
  //   email,
  //   options: {
  //     emailRedirectTo: 'http://localhost:3000/restaurantDashboard'
  //   }
  // })

  //Создаем письмо
// Это ддля продакшена, потому что supabase.auth.admin.generateLink
//  const {data:linkdata,  error:magicError } = await supabase.auth.admin.generateLink({
//   type: 'magiclink',
//   email,
//   options: {
      
//      redirectTo: `${process.env.URL || 'http://localhost:3000'}/restaurantDashboard`,
    
//   }
// })
//  if (magicError){
//   console.log(magicError.message)
//  }


    
}
