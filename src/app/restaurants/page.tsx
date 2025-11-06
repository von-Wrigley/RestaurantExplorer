import { createClient } from '../../../supabase/server';

import RestaurantsPage from '@/components/restaurants/RestaurantsPage';
 

export default async function RestaurantsList() {
  const supabase = await createClient();
  const { data: res, error } = await supabase.from("restaurants").select();
       console.log(error)
  return (
    <RestaurantsPage res={res} />
  )
}