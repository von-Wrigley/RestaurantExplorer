import PofileInfo from '@/components/profile/PofileInfo';
import ReservationDate from '@/components/profile/ReservationDate';

function page() {
  return (
    <div className=" w-full rounded-t-2xl my-4">
      <div className="flex flex-col lg:flex-row gap-5 justify-between h-full">
        <PofileInfo />
        <ReservationDate />
      </div>
    </div>
  );
}

export default page;
