'use client'
import { signInAdmin } from "@/components/admin/Adminauth";
import { useActionState } from "react";

 
function AdminAuth() {
   
    const [state, formAction, isPending] = useActionState(signInAdmin, null);



  return (
    <div>
        <form action={formAction}> 
               <div>
                   <input type="email" placeholder="email" name="email" required />
                     {state?.error && <p>{state.error}</p>}
               </div>

               <div>
                    <input name="password" type="password" placeholder="пароль" required />
                  {state?.error && <p>{state.error}</p>}
               </div>
           
          
              <button type="submit">Вход</button>

        </form>
         
    </div>
  )
}

export default AdminAuth
