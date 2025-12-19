'use server'
import { createClient } from "../../../supabase/server"
import { getRev } from "./getRev"



export  const makeReserv = async(previousState:any, formData:any)=> {




      const supabase = await createClient()
      const {data: {user}, error} = await supabase.auth.getUser()
      if(error){
        console.log('error in getting user', error)
      }
   
  
   const res_id = formData.get('res_id')
   const table_id = formData.get('table_id')
   const tm = formData.get('selected_time')
   const dt = formData.get('selected_date')
   const special_request = formData.get('special_request')
   
   const tmFormat = tm.split('-').map((x:string) => x.trim())
   const booking_date = dt.split('.').reverse().join('-')
     
   
     const x = table_id.split(',')
     const randomTable  = Math.floor(Math.random()* x.length)
     console.log(x[randomTable])
  
    const sum =    getRev(tm, booking_date)
    const sumBooking = sum.toString()

 const { error: errorBooking} = await supabase.from('booking').insert({
  user_id: user?.id,
  table_id: x[randomTable],
  res_id,
  booking_date,
  start_time:  tmFormat[0],
  end_time:  tmFormat[1], 
  status: 'confirmed',
  special_request,
  sum:sumBooking

 })
 if(errorBooking){
  console.log('problem in inserting booking', errorBooking)
 }


}