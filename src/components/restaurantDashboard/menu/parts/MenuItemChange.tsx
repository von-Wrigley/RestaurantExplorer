'use client';

import { categoryItems } from '@/static/res';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

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

function MenuItemChange({ field, register, control, index, formItems, remove }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  flex-col gap-y-3">
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }}
        className="flex w-full cursor-pointer  flex-row justify-between   bg-blue-400 rounded-sm  ring shadow-xl ring-gray-900/5 p-1.5 "
      >
        <h5 className="text-xl text-black font-semibold">{field.name.ru}</h5>

        <div className="flex flex-row gap-3">
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
      </div>

      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out  ${isOpen ? 'opacity-100 max-h-fit pb-2 ' : 'opacity-0 max-h-0'}`}
      >
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-lg">Название на русском:</label>
            <input
              type="text"
              className="border p-1 rounded-sm bg-white"
              {...register(`items.${index}.name.ru`)}
            />
          </div>
          <div>
            <label className="text-lg">Название на английском:</label>
            <input
              type="text"
              className="border p-1 rounded-sm bg-white"
              {...register(`items.${index}.name.en`)}
            />
          </div>
          <div>
            <label className="text-lg">Название на испанском: </label>
            <input
              type="text"
              className="border p-1 rounded-sm bg-white"
              {...register(`items.${index}.name.es`)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label>Описание на русском</label>
          <textarea
            {...register(`items.${index}.description.ru`)}
            placeholder="Описание на русском"
            className="border p-1 rounded-sm bg-white"
          ></textarea>
          <label>Описание на английском</label>
          <textarea
            {...register(`items.${index}.description.en`)}
            placeholder="Описание на английском"
            className="border p-1 rounded-sm bg-white"
          ></textarea>
          <label>Описание на испанском</label>
          <textarea
            {...register(`items.${index}.description.es`)}
            placeholder="Описание на испанском"
            className="border p-1 rounded-sm bg-white"
          ></textarea>
        </div>

        <div className="p-3 flex flex-col gap-3">
          <div></div>

          <Controller
            control={control}
            name={`items.${index}.category`}
            render={({ field }) => (
              <div>
                {categoryItems.map((x) => (
                  <label key={x}>
                    <input
                      type="radio"
                      value={x}
                      checked={field.value === x}
                      onChange={(e) => {
                        const selectedCategoryItem = e.target.value;
                        field.onChange(selectedCategoryItem);
                      }}
                    />
                    {categoryItem[x].name}
                  </label>
                ))}
              </div>
            )}
          />

          <div className="flex flex-row justify-between w-full  p-4 my-1">
            <p className="text-lg">
              <span className="font-semibold text-lg">Цена</span> :{' '}
              <input
                className="px-1 w-18 bg-white border"
                type="number"
                {...register(`items.${index}.price`, {
                  valueAsNumber: true,
                })}
              />
            </p>
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-600 p-2 rounded-lg"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemChange;
