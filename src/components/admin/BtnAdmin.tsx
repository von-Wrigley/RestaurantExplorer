'use client'

import { sendemail } from "./sendemail"
import { SendInfo } from "./SendInfo"

 
 


function BtnAdmin({email, id, name}:any) {

 const sendAd=  async(id, email, name)=> {
   await SendInfo(id, email, name)
    // await new Promise(resolve => setTimeout(resolve, 1000))
  //  await sendemail(email)

 }

    console.log(email, id)
  return (
   <button type='submit' className='p-1.5 rounded border w-fit ' onClick={()=> sendAd(id, email, name)}>Одобрить</button>
  )
}

export default BtnAdmin
