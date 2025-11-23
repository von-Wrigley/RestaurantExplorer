'use client'
import { SendInfo } from './SendInfo';


function BtnAdmin({email, id}:any) {
    console.log(email, id)
  return (
   <button className='p-1.5 rounded border w-fit ' onClick={()=> SendInfo(id, email)}>Одобрить</button>
  )
}

export default BtnAdmin
