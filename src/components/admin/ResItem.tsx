import { createClient } from '../../../supabase/server';
import BtnAdmin from './BtnAdmin';


async function ResItem() {

const supabase = await createClient()
const {data, error} = await supabase.from('res_applications').select('*').eq('status', 'pending')
 
console.log('Error:', error)
  return (
    <div className='md:ml-8 w-fit md:mt-8 border p-5 rounded-md '>
       <h3 className='text-2xl font-bold border-b mb-5'>Заявки на одобрение</h3>
       {data?.map((d, index)=> (
        <div key={index} className='mb-4  flex flex-col gap-y-2  '>
          <h4>Заявка от ресторана <span className='font-black '>{d.name}</span></h4>
                     <p>
                      Почта: {d.res_email}
                     </p>
                     <p className='bg-amber-300 hover:brightness-97  w-fit p-1 rounded-lg px-1.5'>
                      {d.status ? 'В ожидании одобрения' : null}
                     </p>
                     <BtnAdmin email={d.res_email} psw={d.res_password} id={d.id} />
                     
        </div>
       ))}
    </div>
  )
}

export default ResItem
