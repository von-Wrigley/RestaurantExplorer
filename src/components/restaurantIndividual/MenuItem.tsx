import { getFavDish } from '@/actions/menu/getFavDish';
import ItemDescription from './ItemDescription';
import { getLocale } from 'next-intl/server';
import { getallMenu } from '@/actions/menu/getallMenu';
import { Suspense } from 'react';

const predefinedCategories = [
  {
    key: 'hot',
    title: {
      en: 'Hot dishes',
      ru: 'Горячие блюда',
      es: 'Platos calientes',
    },
  },
  {
    key: 'cold',
    title: {
      en: 'Cold appetizers',
      ru: 'Холодные закуски',
      es: 'Entrantes fríos',
    },
  },
  {
    key: 'salads',
    title: {
      en: 'Salads',
      ru: 'Салаты',
      es: 'Ensaladas',
    },
  },
  {
    key: 'drinks',
    title: {
      en: 'Drinks',
      ru: 'Напитки',
      es: 'Bebidas',
    },
  },
  {
    key: 'desserts',
    title: {
      en: 'Desserts',
      ru: 'Десерты',
      es: 'Postres',
    },
  },
];

type language = 'en' | 'es' | 'ru';
interface menuItemDescription {
  category: string;
  description: Record<language, string>;
  id: number;
  name: Record<language, string>;
  price: number;
}
async function MenuItem({ locale }) {
  const { dataFav } = await getFavDish();
  const menu = await getallMenu();
  // const locale = await getLocale();
  console.log('menu', menu);

  return (
    <div className="bg-gray-100 rounded-xl dark:bg-black dark:text-white   ">
      {menu?.map((men, index) => (
        <div key={index} className="p-4.5   flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6">
          <div>
            {men.menu_items.filter(
              (m: { category: string }) => m.category === predefinedCategories[0].key
            ).length > 0 && (
              <>
                <h3 className="font-semibold text-2xl dark:text-darkmode-10">
                  {predefinedCategories[0].title[locale as language]}
                </h3>
                {men.menu_items
                  .filter((m: { category: string }) => m.category === predefinedCategories[0].key)
                  .map((q: menuItemDescription) => (
                    <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
                  ))}
              </>
            )}
          </div>

          <div>
            {men.menu_items.filter(
              (m: { category: string }) => m.category === predefinedCategories[1].key
            ).length > 0 && (
              <>
                <h3 className="font-semibold text-2xl dark:text-darkmode-10">
                  {predefinedCategories[1].title[locale as language]}
                </h3>
                {men.menu_items
                  .filter((m: { category: string }) => m.category === predefinedCategories[1].key)
                  .map((q: menuItemDescription) => (
                    <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
                  ))}
              </>
            )}
          </div>
          <div>
            {men.menu_items.filter(
              (m: { category: string }) => m.category === predefinedCategories[2].key
            ).length > 0 && (
              <>
                <h3 className="font-semibold text-2xl dark:text-darkmode-10">
                  {predefinedCategories[2].title[locale as language]}
                </h3>
                {men.menu_items
                  .filter((m: { category: string }) => m.category === predefinedCategories[2].key)
                  .map((q: menuItemDescription) => (
                    <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
                  ))}
              </>
            )}
          </div>

          <div>
            {men.menu_items.filter(
              (m: { category: string }) => m.category === predefinedCategories[3].key
            ).length > 0 && (
              <>
                <h3 className="font-semibold text-2xl dark:text-darkmode-10">
                  {predefinedCategories[3].title[locale as language]}
                </h3>
                {men.menu_items
                  .filter((m: { category: string }) => m.category === predefinedCategories[3].key)
                  .map((q: menuItemDescription) => (
                    <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
                  ))}
              </>
            )}
          </div>

          <div>
            {men.menu_items.filter(
              (m: { category: string }) => m.category === predefinedCategories[4].key
            ).length > 0 && (
              <>
                <h3 className="font-semibold text-2xl dark:text-darkmode-10">
                  {predefinedCategories[4].title[locale as language]}
                </h3>
                {men.menu_items
                  .filter((m: { category: string }) => m.category === predefinedCategories[4].key)
                  .map((q: menuItemDescription) => (
                    <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
                  ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItem;
