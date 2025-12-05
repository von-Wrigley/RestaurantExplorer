'use server'

import { createClient } from "../../../supabase/server"

 

export async function getMenuItemFromTable(){
    const supabase = await createClient()
    const {data: user, error} = await supabase.auth.getUser()
    console.log('user      ', user)

 if(error){
    console.log('Error in getting users menu. ', error )
 }

 const {data: restaurant, error: errorMenu} = await supabase.from('menus').select('*').eq('owner', user.user?.id).single()
console.log(restaurant)
 if(errorMenu){
     console.log('Error in getting users menu in restaurants table. ', errorMenu.cause, errorMenu.message )
 }
 return restaurant
}