import { createClient } from '../../../supabase/anon';
import { cacheLife, cacheTag } from 'next/cache';

export const getRestaurantIndivid = async (slug: string) => {
  'use cache';
  cacheTag(`${slug}`);
  cacheLife('days');
  const supabase = createClient();
  const { data: res } = await supabase
    .from('restaurants')
    .select('*')
    .eq('slug_name', slug)
    .single();
  return res;
};
