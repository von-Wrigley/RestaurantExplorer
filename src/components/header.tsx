import Link from "next/link"
import { createClient } from "../../supabase/server"
import BtnSignout from "./BtnSignout"

 

async function Header() {
const supabase= await createClient()
const {data:{user}} = await supabase.auth.getUser()

console.log('user header', user)

  return (
    <header>
       <div className="border rounded-b-3xl  p-4 flex flex-row justify-between font-bold text-3xl">
      <h4>loho</h4>
      <nav>
        {user ? <BtnSignout /> : (<Link href='/auth' className="border-2 rounded-2xl p-2">Войти</Link > )
        }
          
      </nav>
    
    </div>

    </header>
   
  )
}

export default Header
