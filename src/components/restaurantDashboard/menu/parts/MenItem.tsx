'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import MenuItemChange from './MenuItemChange'


import { useForm, useFieldArray  } from 'react-hook-form';
import { menuSchema, menuSchemaFormData } from '@/static/res';
import { updateMenu } from '@/actions/setInfo/updateMenu';




 


  type menuItemtype ={
  id: number,
  name: {
    en:string,
    es:string,
    ru:string,
  }
  price: number,
  category: string,
  description: {
    en:string,
    es:string,
    ru:string,
  }
}






function MenItem({res}) {
  


  const {register, control, formState: { errors }, handleSubmit, getValues} = useForm<menuSchemaFormData>({
    resolver: zodResolver(menuSchema),
    defaultValues: {
         items: res.menu_items}
 })

 const {fields, append, remove} = useFieldArray({
  control,
  name:'items',
  keyName: 'rhfId'
 })
const formItems = getValues('items')
const onSubmit = (data, e) => {
console.log('res owner',res)
  // console.log(data.items);
  updateMenu(data.items, res.user_id
)


}
const onError = (errors, e) => console.log(errors, e);
    
    


  return (
        <div className=" w-full">
     
       <div className="px-3">
        <form  onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col'>
          <div className='flex flex-row justify-between p-3'>
          <h2 className='text-2xl font-semibold'>Составление меню</h2>
          <button type="button" className='bg-green-500 p-2 rounded-sm' onClick={()=> append({
            name: {
              ru: '',
              en: '',
              es: ''
            },
            price: 0,
            category: 'hot',
            description: {
              ru: '',
              en: '',
              es: ''
            }
          })}>Добавить</button>
          </div>
          
  {fields.map((field, index) =>(
   

    
  
            <MenuItemChange key={field.rhfId} field={field} register={register} control={control} index={index}   formItems={formItems}  remove={remove} />
             
             
))}
          <button className='bg-amber-300 p-3 rounded-md self-center w-fit mt-3' type="submit">Отправить</button>
        </form>

   
      </div>
    </div>
  )
}

export default MenItem
