
import { createClient } from "../../../supabase/server";
import ItemDescription from "./ItemDescription";



const predefinedCategories = [
  { key: 'hot', title: 'Горячие блюда' },
  { key: 'cold', title: 'Холодные закуски' },
  { key: 'salads', title: 'Салаты' },
  { key: 'drinks', title: 'Напитки' },
  { key: 'desserts', title: 'Десерты' }
];


async function MenuItem({resId}) {

     const supabase = await createClient();
     const {data:{user}, error:errorUser}= await supabase.auth.getUser()
     
     const { data: menu, error  } = await supabase.from("menus").select('*')


    const {data:dataFav, errorDish} =await supabase.from('profiles').select('favorite_dish').eq('id', user?.id).single()
   

    
           console.log('Menu  '  , menu)
    

     

  return (
    <div className="bg-gray-100 rounded-xl">
           
    
                     {menu?.map((men, index) => (
                <div key={index} className="p-4.5 flex flex-col gap-6">
                 <div>
    {men.menu_items.filter(m=> m.category === predefinedCategories[0].key).length >0 && (
      <>
       <h5 className="font-semibold text-2xl">{predefinedCategories[0].title}</h5>
      {men.menu_items.filter(m => m.category === predefinedCategories[0].key).map(q => (
        <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
      ))}
      
      </>
    ) }
   </div>
  
    <div>
    {men.menu_items.filter(m=> m.category === predefinedCategories[1].key).length >0 && (
      <>
       <h5 className="font-semibold text-2xl">{predefinedCategories[1].title}</h5>
      {men.menu_items.filter(m => m.category === predefinedCategories[1].key).map(q => (
        <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
      ))}
      
      </>
    ) }
   </div>
   <div>
    {men.menu_items.filter(m=> m.category === predefinedCategories[2].key).length >0 && (
      <>
       <h5 className="font-semibold text-2xl">{predefinedCategories[2].title}</h5>
      {men.menu_items.filter(m => m.category === predefinedCategories[2].key).map(q => (
        <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish}/>
      ))}
      
      </>
    ) }
   </div>

   <div>
    {men.menu_items.filter(m=> m.category === predefinedCategories[3].key).length >0 && (
      <>
       <h5 className="font-semibold text-2xl">{predefinedCategories[3].title}</h5>
      {men.menu_items.filter(m => m.category === predefinedCategories[3].key).map(q => (
        <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish}/>
      ))}
      
      </>
    ) }
   </div>
   
   <div>
    {men.menu_items.filter(m=> m.category === predefinedCategories[4].key).length >0 && (
      <>
       <h5 className="font-semibold text-2xl">{predefinedCategories[4].title}</h5>
      {men.menu_items.filter(m => m.category === predefinedCategories[4].key).map(q => (
        <ItemDescription q={q} key={q.id} dataFav={dataFav?.favorite_dish} />
      ))}
      
      </>
    ) }
   </div>


                </div>
            )  )}
       
  
    </div>
  )
}

export default MenuItem
