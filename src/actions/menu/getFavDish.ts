'use server';

import { createClient } from '../../../supabase/server';

export async function getFavDish() {
  const supabase = await createClient();
  const {
    data: { user },
    error: errorUser,
  } = await supabase.auth.getUser();

  const { data: dataFav, error: errorDish } = await supabase
    .from('profiles')
    .select('favorite_dish')
    .eq('id', user?.id)
    .single();
  return { dataFav };
}
