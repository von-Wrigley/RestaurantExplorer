import { Fragment } from 'react';
import { fetchedDataRestaurant } from './restaurantType';
import Pagination from '../Pagination';
import { getAllRestairants } from '@/actions/restaurant/getAllRestaurants';
import RestaurantMainPage from './RestaurantMainPage';
import { getLocale } from 'next-intl/server';

async function RestaurantsPage({ searchParams }: { searchParams: { searchParams: { category?: string | undefined; cuisines: string; page: number; }; }}) {
  const searchParamsPage = await searchParams.searchParams;
  const { res, totalPages } = await getAllRestairants(searchParams);
  const currentPage = Number(searchParamsPage.page) || 1;
  const locale = await getLocale();
  return (
    <>
      <div className="p-10 flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-8 ">
        {res.map((restaurant: fetchedDataRestaurant, index: number) => (
          <Fragment key={index}>
            <RestaurantMainPage restaurant={restaurant} locale={locale} index={index} />
          </Fragment>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
}
export default RestaurantsPage;
