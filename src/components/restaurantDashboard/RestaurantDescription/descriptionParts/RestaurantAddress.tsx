import React from 'react'

function RestaurantAddress({register, errors}) {
  return (
    <div className='flex flex-col gap-1.5   p-3.5 rounded-sm h-fit bg-gray-300  ring shadow-xl ring-gray-900/5'>
      <h4>Адрес ресторана</h4>
  
      <input  {...register('translatable.ru.address')} placeholder='Адрес реасторана на русском' className='border p-1 rounded-sm bg-white' />
      <input {...register('translatable.en.address')} placeholder='Адрес реасторана на английском' className='border p-1 rounded-sm bg-white' />
      <input {...register('translatable.es.address')} placeholder='Адрес реасторана на испанском' className='border p-1 rounded-sm bg-white' />
      {errors.translatable?.ru?.address?.message && <p className='text-red-500'>{errors.translatable?.ru?.address?.message}</p>}
      {errors.translatable?.en?.address?.message && <p className='text-red-500'>{errors.translatable?.en?.address?.message}</p>}
      {errors.translatable?.es?.address?.message && <p className='text-red-500'>{errors.translatable?.es?.address?.message}</p>}
        </div>
  )
}

export default RestaurantAddress
