import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getRestIngo } from '@/actions/profile/getRestIngo';

const prefTime: Record<string, string> = { morning: 'утро', afternoon: 'днем', evening: 'вечер' };

async function AddiotinalInfo() {
  const [totalSum, newsortedar, sortedPreferedTime]: [
    number,
    Array<[string, number, string]>,
    Array<[string, number]>,
  ] = await getRestIngo();
  console.log(sortedPreferedTime);
  return (
    // <section className=" bg-white rounded-lg w-fit p-4 shadow-sm ">

    <div className="flex flex-col sm:flex-row gap-2  py-1.5 text-lg">
      <div className="w-fit">
        <div className="bg-white rounded-lg w-fit p-3 shadow-sm ">
          <p>
            Сумма, потраченная в ресторанах:{' '}
            {totalSum.toLocaleString('ru-Ru', { style: 'currency', currency: 'Rub' })}
          </p>
          <p>Вы посещали рестораны {sortedPreferedTime[0][1]} раз.</p>
          <p>
            Любимое время для посещения ресторанов: {prefTime[sortedPreferedTime[1][0]]} (
            {sortedPreferedTime[1][1]} визитов или{' '}
            {(100 * sortedPreferedTime[1][1]) / sortedPreferedTime[0][1]}% ).
          </p>
        </div>
      </div>
      <div className="   bg-white rounded-lg p-3 shadow-sm ">
        <h4 className="whitespace-nowrap  underline    decoration-sky-500 dark:decoration-darkmode-10 underline-offset-6 decoration-2 pb-1  ">
          Топ-3 посещаемых ресторанов
        </h4>
        <ul className="list-disc">
          {newsortedar.slice(0, 3).map((x, index) => (
            <li
              key={index}
              className="ml-2  flex flex-row gap-2 hover:bg-amber-100 dark:hover:bg-darkmode-10/25 w-fit px-2 rounded-sm hover:cursor-default "
            >
              <div className="flex flex-row  ">
                <p> {x[0]}</p>
                <Link href={`/restaurants/${x[2]}`}>
                  {' '}
                  <ArrowUpRight className="text-blue-500 dark:text-darkmode-10  size-5 hover:cursor-pointer" />
                </Link>
              </div>

              <p className="text-sm place-content-center-safe">({x[1]} посещений)</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddiotinalInfo;
