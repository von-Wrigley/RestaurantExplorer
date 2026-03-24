'use client';

import { useState } from 'react';
import Modal from './Modal';

function Av({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        className="p-2 hover:cursor-pointer animate-pulse hover:bg-darkmode-10 border-amber-300 dark:border-darkmode-10 dark:bg-gray-300 bg-gray-100 rounded-md border my-2"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Зарезервирировать столик
      </button>
      {isOpen && <Modal id={id} handleClick={handleClick} />}
    </div>
  );
}

export default Av;
