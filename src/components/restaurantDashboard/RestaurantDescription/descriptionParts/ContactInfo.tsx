import React from 'react'

function ContactInfo({register, errors}) {
  return (
      <div className='flex flex-col gap-1.5 bg-gray-300  ring shadow-xl ring-gray-900/5 p-3.5 rounded-lg'>
      <h3>Контактная Информация</h3>
      <span >Электронная почта</span>
      <input {...register('email')} className='border p-1 rounded-sm bg-white' />
       {errors.translatable?.ru?.email?.message && <p className='text-red-500'>{errors.translatable?.ru?.email?.message}</p>}

      <span >Номер Телефона</span>
      <input {...register('phone_number', { required: true })} className='border p-1 rounded-sm bg-white'/>
       {errors.translatable?.ru?.phone_number?.message && <p className='text-red-500'>{errors.translatable?.ru?.phone_number?.message}</p>}
      
        </div>
  )
}

export default ContactInfo
