'use server';
import { createClient } from '../../../supabase/server';

export const getProfileInfo = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error: errorUser,
  } = await supabase.auth.getUser();
  if (errorUser) {
    console.log(errorUser);
  }

  const { data, error } = await supabase.from('profiles').select('*').eq('id', user?.id).single();
  if (error) {
    console.log(error);
  }
  return data;
};
