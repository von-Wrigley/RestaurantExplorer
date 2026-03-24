'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import { fetchedDataRestaurant } from './restaurantType';
type langType = 'en' | 'es' | 'ru';
function RestaurantMainPage({
  restaurant,
  locale,
  index,
}: {
  restaurant: fetchedDataRestaurant;
  locale: string;
  index: number;
}) {
  const [imgLoading, setImgLoading] = useState(false);
  return (
    <Link
      href={`/restaurants/${restaurant.slug_name}`}
      key={restaurant.id}
      className="  rounded-lg  flex flex-col"
    >
      {restaurant.images_url && restaurant.images_url.length > 0 ? (
        <div className=" relative rounded-lg">
          {imgLoading && (
            <div
              className="absolute inset-0 bg-gray-200 animate-pulse 
      [clip-path:polygon(0%_0%,0%_100%,24%_100%,24%_87%,76%_87%,76%_100%,100%_100%,100%_0%)]"
            />
          )}
          <Image
            src={restaurant.images_url[0]}
            alt={restaurant.translatable[locale as langType].name}
            width={500}
            height={500}
            className={`aspect-25/26 overflow-hidden w-full  relative rounded-md
     [clip-path:polygon(0%_0%,0%_100%,24%_100%,24%_87%,76%_87%,76%_100%,100%_100%,100%_0%)]   ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImgLoading(false)}
            priority={index === 0}
          />
          {/* <Image
                  src={restaurant.images_url[0]}
                  alt='sdf'
                  width={500}
                  height={500}
                  className={`aspect-25/26 overflow-hidden w-full  relative rounded-md
     [clip-path:polygon(0%_0%,0%_100%,24%_100%,24%_87%,76%_87%,76%_100%,100%_100%,100%_0%)]  'opacity-100'}`}
                
                /> */}

          {/* <div className="absolute bottom-0 left-0 right-0 h-1/13 
    backdrop-blur-md 
    bg-black/40
    bg-linear-to-t from-black/80 via-black/40 to-transparent
  "> */}
          <div className="flex flex-col gap-0 text-black w-full z-100 absolute bottom-[-5]">
            <h2 className="text-xl  text-center font-bold dark:text-white">
              {restaurant.translatable[locale as langType]?.name}
            </h2>
            <div className="flex flex-row gap-7 px-2.5 py-2 self-center">
              <div className="flex flex-row gap-1">
                <p className="dark:text-white">{restaurant.average_rating}</p>{' '}
                <Star className="size-5 self-center fill-yellow-300" />
              </div>
              <p className="dark:text-white dark:bg-darkmode-10 dark:shadow-xl/50 dark:shadow-darkmode-10   border-0 px-1 rounded-sm">
                {restaurant.translatable[locale as langType]?.type_cuisine}{' '}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>No image</div>
      )}
    </Link>
  );
}

export default RestaurantMainPage;
