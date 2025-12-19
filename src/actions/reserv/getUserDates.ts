import { createClient } from "../../../supabase/server"



export const getUserDate = async ()=> {
 const supabase = await createClient()
 const {data:user, error}= await supabase.auth.getUser()

 if(!user){
    console.log('Юзер не авторизован')
 }

  const {data:booking, error:errorbooking}= await supabase.from('booking').select('booking_date, user_id,start_time, end_time, status, restaurants:res_id(translatable, phone_number)').eq('user_id', user.user?.id)
 if(errorbooking){
    console.log(errorbooking)
 }
 return booking
}