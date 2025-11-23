
'use server'
import { createClient } from '../../../supabase/server';

async function  ActionToAdmin(previousState:any, formData:any) {

 const password = formData.get('password')
 const email = formData.get('email')
const name = formData.get('name')


const supabase = await createClient()

const {status, error} = await supabase.from('res_applications').insert([{
   res_email: email,
   res_password: password,
   status: 'pending',
   name
}

]).select()
    
     if(error){
      console.log('Full error details:', error) 

 }
}

export default ActionToAdmin;