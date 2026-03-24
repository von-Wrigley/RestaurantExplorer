'use server';
import { refresh } from 'next/cache';
import { createClient } from '../../../supabase/server';
import { checkauth } from '../auth/checkAuth';

export const cancelreserv = async (resId, bookingDate, startTime) => {
  const supabase = await createClient();

  const user = await checkauth();
  console.log('erw ', user);

  const { error: errorBooking } = await supabase
    .from('booking')
    .update({ status: 'cancelled' })
    .eq('user_id', user?.id)
    .eq('res_id', resId)
    .eq('booking_date', bookingDate)
    .eq('start_time', startTime);

  refresh();
  console.log(errorBooking);
};
