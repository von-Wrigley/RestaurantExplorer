import { dietaryRestrictions, dietaryRestrictionstranslations } from '@/static/res'
import { Controller } from 'react-hook-form'

function AdditionalInfoFood({setValue, control}) {
    const handleCheckedDietary = (checkedDetary)=> {

        const checkedDetaryEn = checkedDetary.map(x=> dietaryRestrictionstranslations[x].en)
        const checkedDetaryEs = checkedDetary.map(x=> dietaryRestrictionstranslations[x].es)
     

        setValue('translatable.ru.dietary_restrictions', checkedDetary)
        setValue('translatable.en.dietary_restrictions', checkedDetaryEn)
        setValue('translatable.es.dietary_restrictions', checkedDetaryEs)


    }
  return (
    <div className='bg-gray-300  ring shadow-xl ring-gray-900/5 h-fit p-3  rounded-lg'>
        <h3>Дополнительная информация о кухне</h3>
         <Controller
          control={control}
          name='translatable.ru.dietary_restrictions'
          render={({field})=>(
            <div> 
                {dietaryRestrictions.map(diet=> (
                        <label key={diet} className='flex flex-row gap-1'>
                    <input type='checkbox' 
                    checked={field.value.includes(diet)}
                    onChange={(e)=> {
                        let checkedDietary=[]
                        if(e.target.checked){
                            checkedDietary=[...field.value, diet]
                        }
                        else{
                            checkedDietary=field.value.filter(x=>x!==diet )
                        }

                        handleCheckedDietary(checkedDietary)
                    }}
                    />
                    {diet}
                </label>
                ))}
           
            </div>
          )}
         
         
         
         
         />
    </div>
  )
}

export default AdditionalInfoFood
