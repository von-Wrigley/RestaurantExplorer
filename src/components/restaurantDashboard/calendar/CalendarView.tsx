import { getBookingCalendar } from '@/actions/calendar/getBookingCalendar';
import CalendarTable from './CalendarTable';

async function CalendarView() {
  const bookings = await getBookingCalendar();

  return (
    <>
      <CalendarTable bookings={bookings} />
    </>
  );
}

export default CalendarView;
