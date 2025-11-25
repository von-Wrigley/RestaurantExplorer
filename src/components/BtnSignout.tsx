'use client'

import { handleSignout } from "@/actions/auth/signout"

 


function BtnSignout() {

 
  
 
  return (
   <button type="button" onClick={handleSignout} >Выйти </button>
  )
}

export default BtnSignout
