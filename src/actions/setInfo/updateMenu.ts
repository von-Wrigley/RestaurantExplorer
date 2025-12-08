'use server'

import { createClient } from "../../../supabase/server"


export async function updateMenu(data, id) {

    const supabase = await createClient()
    const { error } = await supabase
  .from('menus')
  .update({ menu_items: data })
  .eq('user_id', id)
  console.log("data для апдейта меню",data)

  if(error){
    console.log("Error in sending/updating menu", error)
  }
    
}