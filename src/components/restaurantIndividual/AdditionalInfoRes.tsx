import { getRestaurantIndivid } from '@/actions/restaurant/getRestaurantIndivid';

async function AdditionalInfoRes({ locale, slug }: { locale: string; slug: string }) {
  const restaurant = await getRestaurantIndivid(slug);

  return (
    <section
      className=" flex flex-col gap-4 p-4 border-amber-300 border-2 bg-gray-100
                 dark:bg-black dark:text-white dark:border-darkmode-10 
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl   flex-1 "
    >
      <h3 className="text-center text-2xl">Дополнительная информация</h3>
      <span className="font-bold text-lg">Услуги</span>
      <div className="flex flex-row gap-2.5 flex-wrap">
        {restaurant.translatable[locale as lang].services.map((x: string, index: number) => (
          <p
            className="bg-amber-300 dark:bg-darkmode-10  dark:shadow-darkmode-10/50 shadow-lg shadow-amber-300/50  hover:shadow-amber-300/80 px-2 w-fit p-1 rounded-md"
            key={index}
          >
            {x}
          </p>
        ))}
      </div>

      <div></div>
      <span className="font-bold text-lg">Бронирование на особые случаи</span>
      <div className="flex flex-row gap-2.5 flex-wrap">
        {restaurant.translatable[locale as lang].special_occasions.map(
          (x: string, index: number) => (
            <p
              className="bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md dark:bg-darkmode-10 dark:shadow-darkmode-10/50"
              key={index}
            >
              {x}
            </p>
          )
        )}
      </div>

      <div>
        <span className="font-bold text-lg">Вместимость ресторана:</span>{' '}
        <span> {restaurant.capacity} персон</span>
      </div>

      {(restaurant.parking || restaurant.wifi || restaurant.kids_room) && (
        <span className="font-bold text-lg">Остальное</span>
      )}
      <div className="flex flex-row gap-2.5 flex-wrap">
        {restaurant.parking && (
          <span className="bg-amber-300  shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md dark:bg-darkmode-10 dark:shadow-darkmode-10/50">
            Паркинг
          </span>
        )}
        {restaurant.wifi && (
          <span className="bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md dark:bg-darkmode-10 dark:shadow-darkmode-10/50">
            WIFI
          </span>
        )}
        {restaurant.kids_room && (
          <span className="bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md dark:bg-darkmode-10 dark:shadow-darkmode-10/50">
            Детская игроваяя комната
          </span>
        )}
      </div>
      <div>
        <h3 className="font-bold text-lg">Контакты</h3>
        <p className=" pt-2 w-fit">
          <span className="font-semibold">Почта: </span> {restaurant.email}
        </p>
        <p className=" pt-2 w-fit ">
          <span className="font-semibold">Номер телефона: </span> {restaurant.phone_number}
        </p>
      </div>
    </section>
  );
}

export default AdditionalInfoRes;
