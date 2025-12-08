import { getMenuItemFromTable } from "@/actions/menu/getmenu"
import MenuItemAc from "./parts/MenuItemAc";



 
async function MenuView() {
  const res =await getMenuItemFromTable()
  if(res ==null){
    console.log('res proles')
  }
  console.log('меню ',res)

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
  return (
    <div  className=' w-full'>
      <h1 className="text-2xl p-2 mb-1 font-bold text-center">Нынешнее меню</h1>
      <div className="px-3">
        {( res.menu_items == null || res.menu_items.length===0 ) && <div><h4>Меню не заполнено</h4></div>}
  {res.menu_items.map((item: menuItemtype) =>(
 <MenuItemAc item={item} key={item.name.en} />
      ))}
   
      </div>
    
      
    </div>
  )
}

export default MenuView
