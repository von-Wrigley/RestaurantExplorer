'use client'
import React, { useActionState } from 'react'
import { userin } from './userin'


function UserIn() {
       const [state, formAction]= useActionState(userin, null)
  return (
    <div className='border rounded-md p-6'>
      <form action={formAction} >
          <h2>Войтив аккаунт</h2>
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
        <button type="submit">Вход</button>
      </form>
    </div>
  )
}

export default UserIn
