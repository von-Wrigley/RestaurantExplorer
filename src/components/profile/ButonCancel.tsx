'use client';

import { cancelreserv } from '@/actions/reserv/cancelReserv';

function ButtonCancel({ resId, bookingDate, startTime }) {
  return (
    <button
      onClick={() => cancelreserv(resId, bookingDate, startTime)}
      className="bg-red-500 w-fit self-end hover:bg-red-600 cursor-pointer py-1.5 px-2 rounded-lg text-white"
    >
      Отменить бронь
    </button>
  );
}

export default ButtonCancel;
