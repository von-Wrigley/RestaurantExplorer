import { HeartMinus } from 'lucide-react';
import { getProfileInfo } from '@/actions/profile/getProfileInfo';
import UserInfo from './UserInfo';
import AddiotinalInfo from './AddiotinalInfo';

async function PofileInfo() {
  const bookingData = await getProfileInfo();

  console.log(bookingData);
  return (
    <div className="bg-gray-100 dark:bg-black  p-8 w-full rounded-2xl dark:border dark:border-darkmode-10 ">
      <h3 className=" text-3xl font-serif dark:text-white">Здравствуйте, {bookingData.name}</h3>
      <div className="flex flex-col gap-2 py-4">
        <UserInfo
          email={bookingData.email}
          phone={bookingData.phone}
          birthDate={bookingData.date_of_birth}
        />

        <div className="flex flex-col md:flex-row gap-2 py-4 ">
          <section className="bg-white dark:bg-white rounded-lg sm:w-fit p-4 shadow-sm">
            <h5 className="text-xl underline decoration-sky-500 dark:decoration-darkmode-10 underline-offset-6 pb-1.5 whitespace-nowrap">
              Любимые рестораны
            </h5>
            <ul>
              {bookingData.favorite_restaurants.map((res: string, index: number) => (
                <li key={res} className="text-lg flex flex-row gap-2">
                  <p>
                    {index + 1}. {res}{' '}
                  </p>
                  <HeartMinus className="size-5 self-center cursor-pointer fill-red-600 dark:fill-darkmode-10" />
                </li>
              ))}
            </ul>
          </section>
          <section className="bg-white sm:w-full rounded-lg  p-4 shadow-sm ">
            <h5 className="text-xl underline decoration-sky-500 dark:decoration-darkmode-10  underline-offset-6 pb-1.5 whitespace-nowrap">
              Любимые блюда
            </h5>
            <ul>
              {bookingData.favorite_dish.map((dish: string, index: number) => (
                <li key={dish} className="text-lg flex flex-row gap-2">
                  <p>
                    {index + 1}. {dish}{' '}
                  </p>
                  <HeartMinus className="size-5 self-center cursor-pointer fill-red-600 dark:fill-darkmode-10" />
                </li>
              ))}
            </ul>
          </section>
        </div>
        <AddiotinalInfo />
      </div>
    </div>
  );
}

export default PofileInfo;
