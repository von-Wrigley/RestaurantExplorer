'use server'

import { createClient } from "../../../supabase/server"


export async function getBookingCalendar() {
       const supabase = await createClient()
        const {data: {user}, error} = await supabase.auth.getUser()

         if(error){
    console.log('Error in getting if of res for calendar. ', error )
 }
     const {data:bookings, error:ErrorBooking} = await supabase.from('booking')
     .select(`id, booking_date, start_time, end_time, special_request,tables:table_id(name), profiles:user_id(
      id, name, phone, email)`).eq('res_id', '22b5b3e9-73e7-4fa7-9b9e-386b8ef3ce84')
       
 
     if(ErrorBooking){
    console.log('Error in getting booking for calendar. ', error )}


 return bookings 
}