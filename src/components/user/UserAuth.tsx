'use client';
import { useActionState } from 'react';
import { userAuthfn } from './userAuthfn';
import { userCheckResSchema } from './../../static/res';

function UserAuth() {
  const [state, formAction] = useActionState(userAuthfn, null);
  return (
    <div
      className="border rounded-md p-12 text-2xl
     border-amber-300 dark:text-white dark:bg-black dark:border-darkmode-10"
    >
      <form action={formAction} className="flex flex-col gap-5 ">
        <h2 className="self-center">Регистрация</h2>
        <div className="flex flex-col ">
          <span>Имя</span>
          <input
            type="text"
            name="name"
            required
            className="border-2 rounded-sm border-amber-300 dark:border-darkmode-10"
          />
        </div>

        <div className="flex flex-col">
          <span>Электронная почта</span>
          <input
            type="email"
            name="email"
            required
            className="border-2 rounded-sm border-amber-300 dark:border-darkmode-10"
          />
        </div>
        <div className="flex flex-col">
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            required
            className="border-2 rounded-sm border-amber-300 dark:border-darkmode-10"
          />
        </div>

        <button className="self-center" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default UserAuth;
