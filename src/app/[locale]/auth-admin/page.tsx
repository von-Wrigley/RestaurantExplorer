'use client';
import { signInAdmin } from '@/components/admin/Adminauth';

import { useActionState } from 'react';

function AdminAuth() {
  const [state, formAction, isPending] = useActionState(signInAdmin, null);

  return (
    <div>
      <form
        action={formAction}
        className="dark:bg-white dark:text-black flex flex-col p-5 border gap-4 rounded-sm"
      >
        <div className="flex flex-col gap-1.5">
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            required
            className=" p-1.5 focus:border-amber-300 outline-none border-2 dark:focus:border-darkmode-10 rounded-sm"
          />
          {state?.error && <p>{state.error}</p>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label>Пароль</label>
          <input
            name="password"
            type="password"
            placeholder="пароль"
            required
            className=" p-1.5 focus:border-amber-300 outline-none border-2 dark:focus:border-darkmode-10 rounded-sm"
          />
          {state?.error && <p>{state.error}</p>}
        </div>

        <button type="submit">Вход</button>
        {isPending && <span> думаю.....</span>}
      </form>
    </div>
  );
}

export default AdminAuth;
