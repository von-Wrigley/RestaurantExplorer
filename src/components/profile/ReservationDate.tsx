import { getUserDate } from '@/actions/reserv/getUserDates';
import ButtonCancel from './ButonCancel';

type Status = 'fulfilled' | 'cancelled' | 'confirmed';

const statusColor: Record<Status, string>[] = [
  {
    fulfilled: 'from-amber-500 to-amber-300',
    cancelled: 'from-red-500 to-pink-500',
    confirmed: 'from-green-600 to-teal-400',
  },
];
interface RestaurantInfo {
  name: string;
  address: string;
  phone_number: string;
}

interface ResBookInfo {
  booking_date: string;
  res_id: string;
  sum: string;
  user_id: string;
  start_time: string;
  end_time: string;
  status: Status;
  restaurants: RestaurantInfo[];
}
async function ReservationDate() {
  const bookingData: ResBookInfo[] = await getUserDate();
  console.log(bookingData);
  return (
    <div
      className="overflow-y-scroll h-173 bg-gray-200 dark:bg-black dark:text-white
     w-full px-5 py-2 rounded-2xl dark:border dark:border-darkmode-10"
    >
      <h3 className="text-2xl py-3 text-center font-bold ">История бронирований</h3>
      <ul className="flex flex-col gap-3">
        {bookingData
          ?.sort((a, b) => new Date(b.booking_date).valueOf() - new Date(a.booking_date).valueOf())
          .map((info, index: number) => (
            <li
              key={index}
              className={`p-1.5 bg-linear-270 ${statusColor[0][info.status]} rounded-lg`}
            >
              <div
                className={`shadow-2xs hover:shadow-2xl bg-white rounded-lg flex flex-col gap-4 py-2 px-2.5 dark:bg-black`}
              >
                <div>
                  <p className="text-lg">{info.restaurants.name}</p>
                  <p className="text-lg">
                    Дата: {info.booking_date.split('-').reverse().join('.')}
                  </p>
                  <p className="text-lg">
                    Время резерва: {info.start_time.slice(0, -3)} - {info.end_time.slice(0, -3)}
                  </p>
                  <p className="text-lg">
                    {info.status !== 'confirmed' && `Сумма: ${info.sum} р. `}
                  </p>
                </div>

                <div>
                  <p className="text-lg">Адрес ресторана: {info.restaurants.address}</p>
                  <p className="text-lg">
                    Номер телефона ресторана: {info.restaurants.phone_number}
                  </p>
                </div>
                {info.status === 'confirmed' && (
                  <ButtonCancel
                    resId={info.res_id}
                    bookingDate={info.booking_date}
                    startTime={info.start_time}
                  />
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ReservationDate;
