import React from 'react'

function InputMenuComp({value, title, register, placeholder, errors}) {
 
  return (
                <div className='flex flex-col gap-1.5 bg-gray-300  ring shadow-xl ring-gray-900/5 p-3.5 rounded-sm h-fit'>
      <h4>{title}</h4>
  
      <input {...register(`translatable.ru.${value}`)} placeholder={placeholder.ru} className='border p-1 rounded-sm bg-white' />
      <input {...register(`translatable.en.${value}`)} placeholder={placeholder.en} className='border p-1 rounded-sm bg-white' />
      <input {...register(`translatable.es.${value}`)} placeholder={placeholder.es} className='border p-1 rounded-sm bg-white' />
       {errors.translatable?.ru?.name?.message && <p className='text-red-500'>{errors.translatable?.ru?.name?.message}</p>}
     
        </div>
  )
}

export default InputMenuComp
