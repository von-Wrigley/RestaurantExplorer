
'use server'

import { createAdminClient } from "../../../supabase/server-admin"

 




export async function userAuthfn(previousState:any, formData:any ) {

 const name= formData.get('name')
 const email= formData.get('email')
const password= formData.get('password')

 const supabase =  createAdminClient()
 const { error} = await supabase.auth.admin.createUser({password, email,  user_metadata:{
    full_name: name,
    role: 'user'
 }, email_confirm: true})
 if(error){
    console.log('Error in auth user. ', error.message)
 }


} 

