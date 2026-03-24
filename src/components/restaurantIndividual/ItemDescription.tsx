'use client';
import { getFavoriteDish } from '@/actions/profile/getFavoriteDish';
import { Heart } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { menuItemDescription, lang as language } from '../restaurants/restaurantType';

function ItemDescription({ q, dataFav = [] }: { q: menuItemDescription; dataFav: string[] }) {
  const locale = useParams<{ locale: string }>();
  const lang = locale.locale;

  const isFavOr = dataFav.includes(q.name['ru']);
  const [isfavorite, setIsFavorite] = useState<boolean>(isFavOr);
  const handleFavorite = async (x: string) => {
    const res = await getFavoriteDish(x);

    if (res.success) {
      setIsFavorite(res.isFavoriteDish as boolean);
    }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <div className="flex flex-row gap-2">
          <p className="font-semibold text-xl ">{q.name[lang as language]}</p>
          <Heart
            onClick={() => handleFavorite(q.name['ru'])}
            strokeWidth={1}
            size={20}
            className={
              isfavorite
                ? 'self-center fill-red-500 dark:fill-darkmode-10 hover:cursor-pointer'
                : 'self-center hover:fill-red-500 dark:hover:fill-darkmode-10 hover:cursor-pointer'
            }
          />
        </div>

        <p> {q.description[lang as language]}</p>
      </div>

      <p>{q.price}</p>
    </div>
  );
}

export default ItemDescription;
