'use server'
import { createClient } from '../../../supabase/server';

async function ActionAUth(previousState:any, formData:any) {
const password = formData.get('password')
const email = formData.get('email')

 const supabase = await createClient();
try {

  const {error} =  await supabase.auth.signUp({ email, password });

  if(error){
        console.error(error)
         return;
  }
  return;
  
} catch (error) {
  console.error(error)
}

}

export default ActionAUth
