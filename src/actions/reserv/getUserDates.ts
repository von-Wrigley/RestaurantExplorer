'use server';
import { createClient } from '../../../supabase/server';
type Status = 'fulfilled' | 'cancelled' | 'confirmed';
interface RestaurantInfo {
  name: string;
  address: string;
  phone_number: string;
}
interface ResBookInfo {
  booking_date: string;
  res_id: string;
  sum: string;
  user_id: string;
  start_time: string;
  end_time: string;
  status: Status;
  restaurants: RestaurantInfo[];
}

export const getUserDate = async (): Promise<ResBookInfo[]> => {
  const supabase = await createClient();
  const { data: user, error } = await supabase.auth.getUser();

  if (!user) {
    console.log('Юзер не авторизован');
  }

  const { data: booking, error: errorbooking } = await supabase
    .from('booking')
    .select(
      'booking_date,res_id, sum, user_id,start_time, end_time, status, restaurants:res_id(translatable->ru->>name, translatable->ru->>address, phone_number)'
    )
    .eq('user_id', user.user?.id);
  if (errorbooking) {
    console.log(errorbooking);
  }
  if (!booking) {
    return [];
  }

  return booking;
};
