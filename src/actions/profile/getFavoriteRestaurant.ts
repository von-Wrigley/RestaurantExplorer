'use server';
import { createClient } from '../../../supabase/server';
import { checkauth } from '../auth/checkAuth';

export const getFavoriteRestaurant = async (q: string) => {
  let newFavorites;
  console.log(q);
  const supabase = await createClient();
  const user = await checkauth();
  console.log('User check  ', user);

  const { data: dataFav, error } = await supabase
    .from('profiles')
    .select('favorite_restaurants')
    .eq('id', user?.id)
    .single();
  console.log('122', dataFav);
  const isFavorite = dataFav?.favorite_restaurants.includes(q);
  if (isFavorite) {
    newFavorites = dataFav?.favorite_restaurants.filter((x) => x !== q);
  } else {
    newFavorites = [...dataFav?.favorite_restaurants, q];
  }

  const { data, error: errorAdd } = await supabase
    .from('profiles')
    .update({ favorite_restaurants: newFavorites })
    .eq('id', user?.id);
  if (errorAdd) {
    console.log(errorAdd);
  }

  return {
    message: isFavorite ? 'Блюдо удалено из избранного' : 'Блюдо добавлено в избранное',
    success: true,
    isFavoriteDish: isFavorite ? false : true,
  };
};
