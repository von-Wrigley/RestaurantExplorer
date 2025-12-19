 
const daysOfTheWeek = {
    monday: 1, 
    tuesday: 2,
    wednesday: 3,
    thursday: 4, 
    friday: 5, 
    saturday: 6, 
    sunday: 7
  }
  const dayTranslations = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг', 
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье'
  }

function TimeTable({timeT}:any) {
 
    const tiemArray = Object.entries(timeT).sort(([dayA], [dayB])=> daysOfTheWeek[dayA]-daysOfTheWeek[dayB])

  return (
    <div className="p-3.5 bg-gray-100 rounded-xl">
          <h4 className="text-center text-2xl">Время работы</h4>
       {tiemArray.map(([day, time], index) => (
        <div key={index} className=" grid grid-cols-2 gap-16 p-3 hover:border-b-2  hover:border-amber-300   ">
            <p className="font-bold text-2xl">{dayTranslations[day]}</p>
               <p className=" text-2xl">{time.open} - {time.close} </p>
        </div>
       )   )}
    </div>
  )
}

export default TimeTable
