'use server'

import { createClient } from "../../../supabase/server"

 

export async function getMenuItemFromTable(){
    const supabase = await createClient()
    const {data: user, error} = await supabase.auth.getUser()

 if(error){
    console.log('Error in getting users menu. ', error )
 }

 const {data: restaurant, error: errorMenu} = await supabase.from('restaurants').select('*').eq('owner_id', user.user?.id).single()

 if(errorMenu){
     console.log('Error in getting users menu in restaurants table. ', errorMenu )
 }
 return restaurant
}