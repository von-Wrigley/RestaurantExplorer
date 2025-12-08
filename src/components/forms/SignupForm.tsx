import { useActionState } from "react"
import ActionToAdmin from "./ActionToAdmin";

function SignupForm() {

    const [state, formAction, isPending] = useActionState(ActionToAdmin, null);

  return (
      <form action={formAction} className="flex flex-col gap-8 ">
      
       
           
           
           <div><input className="p-6 text-lg border rounded-md" name="name" type="text" placeholder="название ресторана" /></div>
           <div><input className="p-6 text-lg border rounded-md" name="email" type="email" placeholder="электронная почта" /></div>
           {state?.success === false && <div className="text-red-500">
             {state.message}
            </div>}
           <button type="submit" className="p-4 text-2xl hover:bg-blue-100 hover:rounded-md ">Регистрация</button>
          {state?.success && <div className="text-red-500">
             Successful registartion. Wait for your application approal
            </div>}
        </form>
  )
}

export default SignupForm
