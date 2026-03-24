import { useActionState } from 'react';
import ActionToAdmin from './ActionToAdmin';

function SignupForm() {
  const [state, formAction, isPending] = useActionState(ActionToAdmin, null);

  return (
    <form action={formAction} className="flex flex-col gap-8 ">
      <div>
        <input
          className="p-6 text-lg border-2  focus:outline-none focus:border-amber-300 focus:dark:border-darkmode-10 rounded-md"
          name="name"
          type="text"
          placeholder="название ресторана"
        />
      </div>
      <div>
        <input
          className="p-6 text-lg border-2  focus:outline-none focus:border-amber-300 focus:dark:border-darkmode-10 rounded-md"
          name="email"
          type="email"
          placeholder="электронная почта"
        />
      </div>
      {state?.success === false && <div className="text-red-500">{state.message}</div>}
      {isPending && <div className="text-black">Думаю...</div>}
      <button
        type="submit"
        className="p-4 text-2xl hover:bg-amber-200/30 dark:hover:bg-darkmode-10/30 hover:rounded-md "
      >
        Регистрация
      </button>
      {state?.success && (
        <div className="text-red-500">
          Successful registartion. Wait for your application approal
        </div>
      )}
      <p className="text-gray-400">Забыли пароль?</p>
    </form>
  );
}

export default SignupForm;
