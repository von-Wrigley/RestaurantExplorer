
'use server'

import { createClient } from "../../../supabase/server"

 

async function  ActionToAdmin(previousState:any, formData:any) {

 
 const email = formData.get('email')
const name = formData.get('name')


const supabase = await createClient()

const {status, error} = await supabase.from('res_applications').insert([{
   res_email: email,
   status: 'pending',
   name
}

])

 
    
     if(error?.code === '23505'){
      return{
         success:false,
         message: 'Email already exists'
      }
      console.log('Full error details:', error) 

 }
}

export default ActionToAdmin;