const daysOfTheWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};
const dayTranslations: Record<dayTypes, string> = {
  monday: 'Понедельник',
  tuesday: 'Вторник',
  wednesday: 'Среда',
  thursday: 'Четверг',
  friday: 'Пятница',
  saturday: 'Суббота',
  sunday: 'Воскресенье',
};
type dayTypes = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface timeTableType {
  open: string;
  close: string;
}

function TimeTable({ timeT }: { timeT: Record<dayTypes, timeTableType> }) {
  const tiemArray = Object.entries(timeT).sort(
    ([dayA], [dayB]) => daysOfTheWeek[dayA as dayTypes] - daysOfTheWeek[dayB as dayTypes]
  );

  return (
    <div className="p-3.5 bg-gray-100 rounded-xl dark:text-white dark:border-darkmode-10 dark:bg-black">
      <h3 className="text-center text-2xl">Время работы</h3>
      {tiemArray.map(([day, time], index) => (
        <div
          key={index}
          className=" grid grid-cols-2 gap-16 p-3 hover:border-b-2  hover:border-amber-300 dark:hover:border-darkmode-10  "
        >
          <p className="font-bold text-2xl">{dayTranslations[day as dayTypes]}</p>
          <p className=" text-2xl">
            {time.open} - {time.close}{' '}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TimeTable;
