'use server';
import { createClient } from '../../../supabase/server';

async function ActionAUth(previousState: [], formData: FormData) {
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;

  const supabase = await createClient();
  try {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error(error);
      console.log('Error in ActionAUth: ', error);
      return;
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

export default ActionAUth;
