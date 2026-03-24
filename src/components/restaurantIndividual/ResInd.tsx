import CarouselImage from './CarouselImage';
import TimeTable from './TimeTable';
import BtnReserv from '../reserv/BtnReserv';
import RestaurantDescription from './RestaurantDescription';
import { getRestaurantIndivid } from '@/actions/restaurant/getRestaurantIndivid';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function ResInd({ params }: {params: {locale:string; slug:string}}) {
  const { locale, slug } = await params;

  const restuarant = await getRestaurantIndivid(slug);
  setRequestLocale(locale);

  const AdditionalInfoRes = dynamic(() => import('./AdditionalInfoRes'), {});
  const MenuItem = dynamic(() => import('./MenuItem'), {});

  if (!restuarant) {
    return <div className="text-center py-10">Ресторан не найден</div>;
  }
  return (
    <div className=" my-3 rounded-t-2xl w-full  md:mx-24 dark:bg-black  bg-gray-200 py-5 ">
      <div>
        <div className="flex flex-col lg:flex-row gap-y-4 w-full h-auto  text-white ">
          <Suspense>
            <RestaurantDescription restuarantName={restuarant} locale={locale} />
          </Suspense>

          <CarouselImage imageres={restuarant.images_url} />
        </div>

        <div className="md:flex md:flex-col md:gap-8 md:mt-8 md:items-start flex flex-col">
          <section
            className="border-amber-300 dark:border-darkmode-10 border-2 w-full  my-5
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl  bg-white  flex-2  "
          >
            <Suspense fallback={<p>Loading...</p>}>
              <MenuItem locale={locale} />
            </Suspense>
          </section>

          <div className="flex md:flex-row flex-col gap-14 w-full ">
            <div
              className=" border-amber-300 dark:border-darkmode-10 border-2
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl  bg-gray-100 dark:bg-black w-fit "
            >
              <TimeTable timeT={restuarant.business_hours} />
            </div>

            <Suspense fallback={<p>Loading...</p>}>
              <AdditionalInfoRes slug={slug} locale={locale} />
            </Suspense>
          </div>

          <BtnReserv id={restuarant.owner_id || '1'} />
        </div>
      </div>
    </div>
  );
}

export default ResInd;
