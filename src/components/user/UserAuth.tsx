'use client'
import React, { useActionState } from 'react'
import { userAuthfn } from './userAuthfn'


function UserAuth() {
    const [state, formAction]= useActionState(userAuthfn, null)
  return (
    <div className='border rounded-md p-6'>
        <h2>Регистрация</h2>
      <form action={formAction} >
        <div className='flex flex-col'>
     <span>
        Имя
     </span>
     <input type="text" name='name' required className='border'/>
        </div>
        <div className='flex flex-col'>
          <span>
        Электронная почта
     </span>
     <input type="email" name='email' required className='border' />
        </div>
           <div className='flex flex-col'>
          <span>
        пароль
     </span>
     <input type="password" name='password' required className='border' />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default UserAuth
