'use server';
import { createClient } from '../../../supabase/server';
import { getRev } from './getRev';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeReserv = async (previousState: any, formData: any) => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.log('error in getting user', error);
  }

  const res_id = formData.get('res_id');
  const table_id = formData.get('table_id');
  const tm = formData.get('selected_time');
  const dt = formData.get('selected_date');
  const special_request = formData.get('special_request');

  const tmFormat = tm?.split('-').map((x: string) => x.trim());
  const booking_date = dt.split('.').reverse().join('-');

  const x = table_id.split(',');
  const randomTable = Math.floor(Math.random() * x.length);
  console.log('table', x[randomTable]);

  const sum = getRev(tm, booking_date);
  const sumBooking = sum.toString();

  console.log(user?.id, x[randomTable], res_id);
  const selected_user = user?.id;
  const { data, error: errorBooking } = await supabase.rpc('atomic_make_reserv', {
    p_user_id: selected_user,
    p_table_id: x[randomTable],
    p_res_id: res_id,
    p_booking_date: booking_date,
    p_start_time: tmFormat[0],
    p_end_time: tmFormat[1],
    p_special_request: special_request,
    p_sum: sumBooking,
  });
  if (errorBooking) {
    console.log('problem in inserting booking', errorBooking);
  }
  console.log(data);
};
