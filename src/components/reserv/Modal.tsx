'use client'

import { CircleX } from 'lucide-react';
import { makeReserv } from "@/actions/reserv/makeReserv";
import { Suspense, useActionState, useState } from "react";
import { createPortal } from "react-dom"
import { getDatesReserv } from '@/actions/reserv/getDatesReserv';
import { getBookings } from '@/actions/reserv/getBookings';
import GetTime from './GetTime';
import TimeReservSkeleton from '../skeleton/TimeReservSkeleton';

 



function Modal({ id, handleClick}) {

  const [state, formAction, isPending] = useActionState(makeReserv, null);
  const [getTime, setGetTime] = useState({
    tm: '',
    dt: ''
  })
  const [getTable, setGetTable] = useState([''])
    const [setTable, setSetTable] = useState<any>([])
 

     let availablesTables= new Map()
    const timeBooking  =new Map()
     const start_time = 8
  const end = 22
  let arrFromSet
 
    const dates= getDatesReserv(new Date())
    const transDates = dates.map(x=>{
           return x.toISOString().split('T')[0]
        

    } ) 


       const handleBooking =async(id, x)=> {
        
        const dt= x.split('-').reverse().join('.')
             setGetTime((prev)=> ({
          ...prev,  dt
         }) )
               const [bookings, reestaurantTables] = await getBookings(id, x)

               bookings?.forEach(x=> { 
       const tm =(x.start_time).slice(0, 2)
          if( !timeBooking.has(tm)){  
               timeBooking.set((tm), new Set())
              }
       timeBooking.get(tm).add(x.table_id)
  })
    for(let i = start_time; i < end; i++){
           availablesTables.set(i.toString(),  {
       bookedTables: [],
       isFull:  false,
       freeTables: reestaurantTables
 })  }

  for(const [time, tableId] of timeBooking){  
 availablesTables.set(time,  {
       bookedTables: Array.from(tableId),
       isFull:  reestaurantTables?.length === tableId.size,
       freeTables: reestaurantTables?.filter(table=> !tableId.has(table))
 })  }
 arrFromSet = Array.from(availablesTables);

 setSetTable(arrFromSet)
 
 
 
       }

 
   return createPortal(
    <div className='bg-white border-amber-300  border-2 rounded-2xl z-10 absolute top-6/12 p-5 right-1/2'>
        <div className='flex flex-col gap-4'>
          <div className="flex flex-row justify-between">
              <h5 className="font-black text-2xl text-center">Доступное время для резерва</h5>
              <button className="p-2" onClick={handleClick} type="button"> <CircleX /></button>

          </div>
       
       <div className='flex flex-row gap-8'>
<div className='flex flex-col gap-4 '>
  {transDates.map((x, index)=> (
   <button onClick={()=> handleBooking(id, x)} key={index} className="p-2 text-2xl  hover:cursor-pointer self-start bg-amber-300 rounded-sm hover:bg-violet-500 focus:bg-violet-500">
    {x.split('-').reverse().join('.')}
   </button>
))}

</div>

             <div className="flex flex-col md:grid md:grid-rows-7 md:grid-flow-col bg-amber-100 rounded-2xl  gap-4  ">



 <Suspense fallback={<TimeReservSkeleton />}>
<GetTime setTable={setTable} setGetTime={setGetTime} setGetTable={setGetTable} />
   </Suspense>
    </div>
    </div>
     <form action={formAction} className="p-3 flex flex-col border-amber-300 border rounded-2xl gap-3">
        <p >Выбранная дата:  {getTime.dt} </p>
        <p >Выбранное время: {getTime.tm}  </p>
          <input 
    type="hidden" 
    name="selected_time" 
    value={getTime.tm} 
  />
            <input 
    type="hidden" 
    name="selected_date" 
    value={getTime.dt} 
  />
      <input 
    type="hidden" 
    name="res_id" 
    value= {id}
  />
       <input 
    type="hidden" 
    name="table_id" 
    value= {getTable}
  />
        <textarea id="special_request" name="special_request" defaultValue='Особые пожелания. Например, предоставить вазу если вы придете с цветами'  
       className=" focus:ring focus:ring-violet-500   focus:outline-none    border border-amber-300 focus:border-violet-500 p-2 rounded-sm"></textarea>
      <button type="submit" className="bg-violet-500 hover:cursor-pointer p-1 px-1.5 rounded-sm self-center-safe w-fit">  {isPending ? "Бронируем... ": 'Зарезервировать'}</button>
    
     </form>
          
        </div>
    </div>, document.body)

  
}

export default Modal
