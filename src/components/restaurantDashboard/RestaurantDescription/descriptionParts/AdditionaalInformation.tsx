import React from 'react'
import { Controller } from 'react-hook-form'

function AdditionaalInformation({control}) {
  return (
  <div className='flex flex-col gap-1.5 bg-gray-100 p-3.5 rounded-lg bg-gray-300  ring shadow-xl ring-gray-900/5'>
      <h3>Дополнительная Информация</h3>
      <h3>Паркинг</h3>
        <Controller
          control={control}
          name='parking'
          render={({field})=> (
               <select className='bg-white'  value={field.value ? 'true' : 'false' } onChange={(e)=> {
                field.onChange(e.target.value === 'true')}}>
        <option value="false">Нет</option>
        <option value="true">Есть</option>
      </select>

          )}
        />
     
    
        <h3>WI-FI</h3>
              <Controller
          control={control}
          name='wifi'
          render={({field})=> (
               <select className='bg-white' value={field.value ? 'true' : 'false' } onChange={(e)=> {
                field.onChange(e.target.value === 'true')}}>
        <option value="false">Нет</option>
        <option value="true">Есть</option>
      </select>

          )}
        />
          
  <h3>Десткая комната</h3>
        <Controller
          control={control}
          name='kids_room'
          render={({field})=> (
               <select className='bg-white' value={field.value ? 'true' : 'false' } onChange={(e)=> {
                field.onChange(e.target.value === 'true')}}>
        <option value="false">Нет</option>
        <option value="true">Есть</option>
      </select>

          )}
        />
   
       
      
        </div>
  )
}

export default AdditionaalInformation
