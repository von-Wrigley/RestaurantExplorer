import { getResRole } from '@/actions/analytics/getResRole';
import AnalyticsDashboard from './AnalyticsDashboard';
import { GetRes } from '@/actions/analytics/GetRes';

async function GetInfo() {
  const bookings = await getResRole();
  const restaurant = await GetRes();

  return (
    <div>
      <AnalyticsDashboard bookings={bookings} restaurant={restaurant} />
    </div>
  );
}

export default GetInfo;
