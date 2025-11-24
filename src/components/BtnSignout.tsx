'use client'
import { useRouter } from 'next/navigation';
import { createClient } from "../../supabase/supabase-client"

function BtnSignout() {
    const router = useRouter()
    const supabase =  createClient();
    const handleSignout = async ()=> {
       await supabase.auth.signOut()


        router.refresh()
        setTimeout(()=>     router.push('/')   , 30)
     
    }
  return (
   <button type="button" onClick={handleSignout} >Выйти </button>
  )
}

export default BtnSignout
