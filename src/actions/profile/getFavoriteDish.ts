'use server';
import { createClient } from '../../../supabase/server';

export const getFavoriteDish = async (q: string) => {
  let newFavorites;
  console.log(q);
  const supabase = await createClient();
  const {
    data: { user },
    error: errorUser,
  } = await supabase.auth.getUser();
  if (errorUser) {
    console.log(errorUser.message);
  }
  if (!user) {
    return {
      message: 'пользователь не авторизован',
      success: false,
    };
  }

  const { data: dataFav, error } = await supabase
    .from('profiles')
    .select('favorite_dish')
    .eq('id', user?.id)
    .single();
  const isFavorite = dataFav?.favorite_dish.includes(q);
  if (isFavorite) {
    newFavorites = dataFav?.favorite_dish.filter((x) => x !== q);
  } else {
    newFavorites = [...dataFav?.favorite_dish, q];
  }

  const { data, error: errorAdd } = await supabase
    .from('profiles')
    .update({ favorite_dish: newFavorites })
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
