'use client'
import { Calendar, dateFnsLocalizer,View  } from 'react-big-calendar'
import {format} from 'date-fns/format'
import {parse} from 'date-fns/parse'
import {startOfWeek} from 'date-fns/startOfWeek'
import {getDay} from 'date-fns/getDay'
import {ru} from 'date-fns/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const locales = {
  'ru': ru,
}

const messages = {
  today: "Сегодня",
  previous: "предыдущий",
  next: "Следующий",
  month: "Месяц",
  week: 'Неделя',
  day: 'День',
  agenda: 'Планировщик',
  time: "Время", 
  event: 'Событие',
  date: 'Дата'
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

function CalendarTable({bookings}) {
  console.log('bookings', bookings)
  const [currentView, setCurrentView] = useState<View >('month')

  const boolinksData = bookings.map(x=> {
   

const [year, month, day] = x.booking_date.split('-').map(Number);
const [hour, minute, sec] = x.start_time.split(':').map(Number)

const startTm = new Date(year , month-1, day, hour, minute )
const endTm = new Date(year , month-1, day, hour+1, minute )
   const y = {
    title: `Стол: ${x.tables.name}
    Гость: ${x.profiles.name}
    Номер телефона: ${x.profiles.phone  ?? 'нет телефона'}
    Почта: ${x.profiles.email}`,
    start:  startTm,
    end:  endTm
   }
   return y
  })

  return (
    <div className=' w-full h-full   '>
          <Calendar
      localizer={localizer}
      events={boolinksData}
      startAccessor="start"
      endAccessor="end"
      className='w-fit mx-auto whitespace-pre-line max-w-[920px]'
     view={currentView}
        onView={setCurrentView}
        views={['month', 'week', 'day', 'agenda',]}
    culture='ru'
    messages={messages}
    />
    </div>
  )
}

export default CalendarTable
