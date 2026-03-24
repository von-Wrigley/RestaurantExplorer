'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '../../../supabase/loginandlogoutClient';
import { redirect } from 'next/navigation';

export const handleSignout = async () => {
  console.log('Signout btn pressed');
  const supabase = await createClient();
  await supabase.auth.signOut();

  // revalidatePath('/');
  redirect('/');
};
