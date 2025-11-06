'use client'
import { useActionState, useState } from "react"
import ActionAUth from "./ActionAUth";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

function RegisterForm() {

const [state, formAction, isPending] = useActionState(ActionAUth, null);


const [mode, setMode]= useState(false)
  return (
    <div className="max-w-max  flex flex-col m-auto gap-6">
       <h3 className="text-5xl">Форма для входа/регистрации</h3>

       <div className="flex rounded-md min-h-auto min-w-auto   justify-center">
             <button onClick={()=> setMode(false) } className="p-4 text-2xl hover:bg-blue-100 hover:rounded-md">Вход</button>
             <button onClick={()=>  setMode(true)} className="p-4 text-2xl hover:bg-blue-100 hover:rounded-md ">Регистрация</button>
       </div>

         
          {mode ? <SignupForm /> : <SigninForm /> }
      
    
        
   
    </div>
  )
}

export default RegisterForm
