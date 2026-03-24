'use server';
import { createClient } from '../../../supabase/server';

export async function GetRes() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const { data: res, error: errorRes } = await supabase
    .from('restaurants')
    .select('tables')
    .eq('owner_id', user?.id);
  console.log(res);

  return res;
}
