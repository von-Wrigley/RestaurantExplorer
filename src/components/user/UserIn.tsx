'use client';
import React, { useActionState } from 'react';
import { userinaccount } from './userinaccount';

function UserIn() {
  const [state, formAction] = useActionState(userinaccount, null);
  return (
    <div className="border border-amber-300 dark:text-white dark:bg-black dark:border-darkmode-10 rounded-md p-12 text-2xl">
      <form action={formAction} className="flex flex-col gap-5  h-full">
        <h2 className="self-center">Войтив аккаунт</h2>

        <div className="flex flex-col  flex-1  justify-around">
          <div className="flex flex-col gap-1.5">
            <span>Электронная почта</span>
            <input
              type="email"
              name="email"
              required
              className="border-2 rounded-sm border-amber-300 dark:border-darkmode-10"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <span>Пароль</span>
            <input
              type="password"
              name="password"
              required
              className="border-2 rounded-sm border-amber-300 dark:border-darkmode-10"
            />
          </div>
        </div>

        <button className="" type="submit">
          Вход
        </button>
      </form>
    </div>
  );
}

export default UserIn;
