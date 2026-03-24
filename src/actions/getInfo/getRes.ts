'use server';

import { createClient } from '../../../supabase/server';

export async function getRes() {
  const supabase = await createClient();
  const { data: user, error } = await supabase.auth.getUser();
  if (error) {
    console.log('Problem in getting user in getres func');
  }
  return user;
}
