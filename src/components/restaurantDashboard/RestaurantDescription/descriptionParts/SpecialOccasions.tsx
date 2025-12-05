import { specialOccasions, specialOccasionstranslations } from '@/static/res'
import React from 'react'
import { Controller } from 'react-hook-form'

function SpecialOccasions({setValue, control, errors}) {

    const handleOccasionstranslations = (checkedOccasions)=> {
        const specialOccasionsEn = checkedOccasions.map(x=> specialOccasionstranslations[x].en)
        const specialOccasionsEs = checkedOccasions.map(x=> specialOccasionstranslations[x].es)

        setValue('translatable.ru.special_occasion', checkedOccasions)
        setValue('translatable.en.special_occasion', specialOccasionsEn)
        setValue('translatable.es.special_occasion', specialOccasionsEs)
    }
 
  return (
    <div className='bg-gray-300  ring shadow-xl ring-gray-900/5 p-3  rounded-lg'>
        <h3>Выберите особые события</h3>
        <Controller    
        control={control}
        name='translatable.ru.special_occasion'  
        render={({field})=> (
            <div  > 
              {specialOccasions.map(occasion=> (
                <label className='flex flex-row gap-x-1' key={occasion}  >
                    <input type='checkbox' 
                    checked={field.value.includes(occasion)}
                    onChange={(e)=>{
                        let checkedOccasions= []
                       if(e.target.checked){
                           checkedOccasions = [...field.value, occasion]
                       }
                       else{
                       checkedOccasions = field.value(x=> x!== occasion)
                       }
                              handleOccasionstranslations(checkedOccasions)
                    }} />
                    {occasion}
                </label>
              ))} 


            </div>
        )}
        
        
        />
       {errors.translatable?.ru?.special_occasion?.message && <p className='text-red-500'>{errors.translatable?.ru?.special_occasion?.message}</p>}
    </div>
  )
}

export default SpecialOccasions
