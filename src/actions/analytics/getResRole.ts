'use server'
import { createClient } from "../../../supabase/server"



export async function getResRole(x:string) {
    const supabase = await createClient()
    const {data:{user}, error}= await supabase.auth.getUser()
 


    const {data:bookings, error: errorBooking} = await supabase.from('booking').select('*').eq('res_id', user?.id).eq('booking_date', x)
    if(errorBooking){
        console.log('errorBooking in getting booking', errorBooking.cause, errorBooking.details, errorBooking.message, errorBooking.code)
    }

   return bookings
    
}