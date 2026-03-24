'use client';

import { useState } from 'react';

type catItem = {
  name: string;
};

type CategoryType = Record<string, catItem>;
const categoryItem: CategoryType = {
  hot: {
    name: 'горячее',
  },
  drinks: {
    name: 'напитки',
  },
  cold: {
    name: 'холодное',
  },
  salads: {
    name: 'салаты',
  },
  desserts: {
    name: 'десерт',
  },
};

type menuItemtype = {
  id: number;
  name: {
    en: string;
    es: string;
    ru: string;
  };
  price: number;
  category: string;
  description: {
    en: string;
    es: string;
    ru: string;
  };
};

function MenuItemAc({ item }: { item: menuItemtype }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex  flex-col gap-y-3">
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }}
        className="flex cursor-pointer flex-row justify-between w-fit   bg-blue-400 rounded-sm  ring shadow-xl ring-gray-900/5 p-1.5  gap-3"
      >
        <h5 className="text-xl text-black font-semibold">{item.name.ru}</h5>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out  ${isOpen ? 'opacity-100 max-h-fit pb-2 ' : 'opacity-0 max-h-0'}`}
      >
        <div>
          <p className="text-lg">
            <span className="font-semibold text-lg">Название на английском:</span> {item.name.en}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Название на испанском:</span> {item.name.es}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <span className="font-semibold text-lg">Описание:</span> {item.description.ru}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Описание на английском:</span>{' '}
            {item.description.en}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Описание на испанском:</span>{' '}
            {item.description.es}
          </p>
        </div>
        <div>
          <p className="text-lg">
            <span className="font-semibold text-lg">Категория:</span>{' '}
            {categoryItem[item.category].name}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-lg">Цена</span> : {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuItemAc;
