'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../../../supabase/loginandlogoutClient';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signInAdmin(previousState: any, formData: any) {
  const email = formData.get('email');
  const password = formData.get('password');
  const supabase = await createClient();
  let userRole: string | null = null;

  if (!email || !password) {
    return { error: 'Email or password are required' };
  }

  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error(error);
      return { error: `Authentication failed: ${error.message}, ${(error.cause, error.name)}` };
    }
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (!user || userError) {
      console.log('Проблемы с сессией');
    }

    userRole = user?.user_metadata?.role;
  } catch (error) {
    console.error('error: ', error);
  }

  if (userRole === 'admin') {
    redirect('/ru/admin');
  } else {
    redirect('/');
  }
}
