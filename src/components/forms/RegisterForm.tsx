'use client'
import { useActionState, useState } from "react"

import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

function RegisterForm() {

const [mode, setMode]= useState(false)
  return (
    <div className="max-w-max  flex flex-col m-auto gap-6">
       <h3 className="text-5xl">Форма для входа/регистрации</h3>

       <div className="flex mx-auto rounded-md min-h-auto min-w-auto border w-fit   justify-center">
             <button onClick={()=> setMode(false) } className="p-4 text-2xl  hover:bg-blue-100">Вход</button>
             <span className=" w-px bg-black"></span>
             <button onClick={()=>  setMode(true)} className="p-4 text-2xl  hover:bg-blue-100  ">Регистрация</button>
       </div>

         
          {mode ? <SignupForm /> : <SigninForm /> }
      
    
        
   
    </div>
  )
}

export default RegisterForm
