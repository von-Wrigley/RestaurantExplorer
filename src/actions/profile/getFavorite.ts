'use server';
import { createClient } from '../../../supabase/server';
import { checkauth } from '../auth/checkAuth';

export const getFavorite = async (category: string) => {
  const supabase = await createClient();
  const user = await checkauth();
  const { data: dataFav } = await supabase
    .from('profiles')
    .select(category)
    .eq('id', user?.id)
    .single();
  console.log('dataFav', dataFav);
  return dataFav;
};
