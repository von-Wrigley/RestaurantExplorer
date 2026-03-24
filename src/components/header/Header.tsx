import { Suspense } from 'react';
import HeaderSuspenseElemnents from './HeaderSuspenseElemnents';
import Logo from './Logo';

function Header() {
  return (
    <header className="border-b border-b-amber-300 dark:border-b-darkmode-10 dark:shadow-lg py-3 px-4 ">
      <div className=" flex flex-row justify-between font-bold text-3xl mx-20">
        <Logo />
        <Suspense fallback={<div className="bg-red-400">минутку...</div>}>
          <HeaderSuspenseElemnents />
        </Suspense>
      </div>
    </header>
  );
}

export default Header;
