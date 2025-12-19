
import { createClient } from "../../../supabase/supabase-client";
import { getDatesReserv } from "./getDatesReserv";

export async function getBookings(id, day) {
 
    const supabase =  createClient() 
   
    // const dates= getDatesReserv(new Date())
 
    // const transDates = dates.map(x=> x.toISOString().split('T')[0])
    // console.log(transDates[0],transDates[transDates.length-1] ) 
    
    // const {data:bookings, error} = await supabase.from('booking').select('*').eq('res_id', id).gte('booking_date', transDates[0]).lte('booking_date', transDates[transDates.length-1])
    // console.log('bookings', bookings)
    
    const {data:bookings, error} = await supabase.from('booking').select('*').eq('res_id', id).eq('booking_date', day)
    if(error){
        console.log('Error in getting booking', error.cause, error.details, error.message, error.code)
    }
    console.log(bookings)

    const {data: bookingsTables} = await supabase.from('tables').select('id').eq('restaurant_id', id).eq('is_active', true)

   let reestaurantTables:string[] = []
   bookingsTables?.forEach(x=> reestaurantTables.push(x.id))

   return [bookings, reestaurantTables] 
}