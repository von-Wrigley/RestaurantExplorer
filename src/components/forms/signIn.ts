'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../../supabase/loginandlogoutClient';

export async function signIn(previousState: [], formData: FormData) {
  console.log('Ресторан пытается войти');
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    console.log('Ресторан вошел успешно');

    if (error) {
      console.log('Ресторан не смог войти');
      console.error(error);
      return;
    }
    redirect('/ru/restaurantDashboard');
  } catch (error) {}
}
