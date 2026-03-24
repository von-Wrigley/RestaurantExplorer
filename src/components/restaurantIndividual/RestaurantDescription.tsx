'use client';
import { getFavorite } from '@/actions/profile/getFavorite';
import { getFavoriteRestaurant } from '@/actions/profile/getFavoriteRestaurant';
import { Heart } from 'lucide-react';
import { Suspense, useEffect, useState } from 'react';
import { fetchedDataRestaurant } from '../restaurants/restaurantType';
import {lang} from '../restaurants/restaurantType'
 

function RestaurantDescription({
  restuarantName,
  locale,
}: {
  restuarantName: fetchedDataRestaurant;
  locale: string;
}) {
  // const locale = useParams<{ locale: string }>();
  // const lang = locale.locale;
  const [isfavorite, setIsFavorite] = useState<boolean>(false);
  console.log('isfavorite', isfavorite);
  useEffect(() => {
    const getfavorites = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const faves:any = await getFavorite('favorite_restaurants');
        console.log('favorite_restaurants', faves);
        const isFavOr =faves?.favorite_restaurants.includes(
          restuarantName.translatable['ru'].name
        )  ;

        setIsFavorite(isFavOr);
      } catch (error) {
        console.log(error);
      }
    };
    getfavorites();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFavorieRestaurant = async (name: string) => {
    const res = await getFavoriteRestaurant(name);

    if (res.success) {
      setIsFavorite(res.isFavoriteDish);
    }
  };

  return (
    <Suspense>
      <section className=" basis-3/4 flex flex-col  mt-auto gap-20  animate-description">
        <div className="flex flex-row justify-center ">
          <h2 className="text-center text-black dark:text-white    text-6xl">
            {restuarantName.translatable[locale as lang].name}
          </h2>
          <Heart
            onClick={() => handleFavorieRestaurant(restuarantName.translatable['ru'].name)}
            strokeWidth={1}
            size={20}
            className={
              isfavorite
                ? 'self-center fill-red-500 border-red-500 dark:fill-darkmode-10 hover:cursor-pointer'
                : 'self-center dark:hover:fill-darkmode-10 hover:fill-red-500 hover:cursor-pointer'
            }
          />
        </div>
        <p className="text-base px-2 font-sans antialiased indent-4 tracking-wide  dark:text-white dark:bg-black text-black   pt-2 text-small rounded-r-md  bg-blue-200 mx-auto">
          {restuarantName.translatable[locale as lang].description}
        </p>
      </section>
    </Suspense>
  );
}

export default RestaurantDescription;
