import { useActionState } from 'react';
import { signIn } from './signIn';

function SigninForm() {
  const [state, formAction, isPending] = useActionState(signIn, null);
  return (
    <form action={formAction} className="flex flex-col gap-8 ">
      <div>
        <input
          className="p-6 text-lg border rounded-md border-amber-300 dark:border-darkmode-10"
          name="email"
          type="email"
          placeholder="электронная почта"
        />
      </div>
      <div>
        <input
          className="p-6 text-lg border rounded-md border-amber-300 dark:border-darkmode-10"
          name="password"
          type="password"
          placeholder="пароль"
        />
      </div>
      {isPending && <div className="text-black">Думаю...</div>}
      <button
        type="submit"
        className="p-4 text-2xl hover:bg-amber-200/30 dark:hover:bg-darkmode-10/30 hover:rounded-md "
      >
        Вход
      </button>
      <p className="text-gray-400">Забыли пароль?</p>
    </form>
  );
}

export default SigninForm;
