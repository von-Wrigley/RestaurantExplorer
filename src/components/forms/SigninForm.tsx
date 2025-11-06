import { useActionState } from "react"
import { signIn } from "./signIn";


function SigninForm() {
    const [state, formAction, isPending] = useActionState(signIn, null);
  return (
      <form action={formAction} className="flex flex-col gap-8 ">
      
           <div><input className="p-6 text-lg border rounded-md" name="email" type="email" placeholder="электронная почта" /></div>
           <div><input className="p-6 text-lg border rounded-md" name="password" type="password" placeholder="пароль" /></div>
           <button type="submit" className="p-4 text-2xl hover:bg-blue-100 hover:rounded-md ">Вход</button>
            <p className="text-gray-400">Забыли пароль?</p>
        </form>
  )
}

export default SigninForm
