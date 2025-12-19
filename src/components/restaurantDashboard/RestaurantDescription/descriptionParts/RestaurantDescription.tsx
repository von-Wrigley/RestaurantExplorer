import React from 'react'

function RestaurantDescription({register, errors}) {
  return (
    <div className='flex flex-col gap-1.5 col-span-2   bg-gray-300  ring shadow-xl ring-gray-900/5 h-fit p-3.5  rounded-lg '>
      <h4>Описание ресторана</h4>
       <label>Описание на русском:</label>
      <textarea  {...register('translatable.ru.description')} placeholder='Описание на русском' 
      className='focus:border-blue-500 focus:ring focus:ring-blue-600 duration-300   focus:outline-none border p-1 rounded-sm bg-white caret-blue-500' />
       <label>Описание на английском:</label>
       <textarea {...register('translatable.en.description')} placeholder='Описание на английском' 
       className=' focus:border-blue-500 focus:ring focus:ring-blue-600 duration-300    focus:outline-none border p-1 rounded-sm bg-white caret-blue-500' />
        <label>Описание на испанском:</label>
        <textarea {...register('translatable.es.description')} placeholder='Описание на испанском' 
        className='focus:border-blue-500 focus:ring focus:ring-blue-600 duration-300    focus:outline-none  
      border p-1 rounded-sm bg-white ' />
 {errors.translatable?.ru?.description?.message && <p className='text-red-500'>{errors.translatable?.ru?.description?.message}</p>}
   
        </div>
  )
}

export default RestaurantDescription
