import ResSelection from '@/components/restaurants/ResSelection';
import RestaurantsPage from '@/components/restaurants/RestaurantsPage';
import TitleRes from '@/components/restaurants/TitleRes';
import { Suspense } from 'react';

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }, { locale: 'es' }];
}
export default function RestaurantsList(searchParams: { searchParams: { category?: string | undefined; cuisines: string; page: number; }; } ) {
  return (
    <div className=" min-w-3/4 mt-5.5 m-auto ">
      <TitleRes />
      <Suspense>
        <ResSelection />
      </Suspense>
      <Suspense>
        <RestaurantsPage searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
