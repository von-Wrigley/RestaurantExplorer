'use client';
import { useActionState, useState } from 'react';
import SignupForm from '../forms/SignupForm';
import SigninForm from '../forms/SigninForm';

function RegisterForm() {
  const [mode, setMode] = useState(false);
  return (
    <div className="flex flex-col items-center gap-6 bg-gray-100 rounded-sm px-5 mx-auto my-auto py-2.5">
      <h3 className="text-5xl self-center">Форма для входа и регистрации</h3>

      <div className="flex mx-auto rounded-md min-h-auto min-w-auto border w-fit   justify-center">
        <button
          onClick={() => setMode(false)}
          className="p-4 text-2xl hover:bg-amber-200/30 dark:hover:bg-darkmode-10/30"
        >
          Вход
        </button>
        <span className=" w-px bg-black"></span>
        <button
          onClick={() => setMode(true)}
          className="p-4 text-2xl  hover:bg-amber-200/30 dark:hover:bg-darkmode-10/30  "
        >
          Регистрация
        </button>
      </div>

      {mode ? <SignupForm /> : <SigninForm />}
    </div>
  );
}

export default RegisterForm;
