import MenuChange from "@/components/restaurantDashboard/menu/MenuChange"
import MenuView from "@/components/restaurantDashboard/menu/MenuView"

 


function MenuForm() {
  return (
    <div className=" w-full">
      <div className="flex flex-row ">
      <h1 className="mx-auto text-2xl">Конструктор меню</h1>
      </div>
     <div className="flex flex-row justify-between bg-white mt-2.5 h-full">
      <MenuView />
      <MenuChange />
     </div>
      
    </div>
  )
}

export default MenuForm
