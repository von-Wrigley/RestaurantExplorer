import React from 'react';
import { Controller } from 'react-hook-form';

function InfoNumber({ register, errors, control }) {
  return (
    <div className="flex flex-col gap-1.5   p-3.5 rounded-lg bg-gray-300  ring shadow-xl ring-gray-900/5">
      <h3>Дополнительная Информация</h3>
      <h3>Средний чек</h3>
      <Controller
        control={control}
        name="price_range"
        render={({ field }) => (
          <input
            className="border p-1 rounded-sm bg-white"
            required
            value={field.value || ''}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
              field.onChange(value);
            }}
          />
        )}
      />
      {errors.translatable?.ru?.price_range?.message && (
        <p className="text-red-500">{errors.translatable?.ru?.price_range?.message}</p>
      )}

      <h3>Число мест в зале</h3>
      <Controller
        control={control}
        name="capacity"
        render={({ field }) => (
          <input
            className="border p-1 rounded-sm bg-white"
            required
            value={field.value || ''}
            onChange={(e) => {
              const value = e.target.value === '' ? 0 : parseInt(e.target.value, 10);
              field.onChange(value);
            }}
          />
        )}
      />
      {errors.translatable?.ru?.capacity?.message && (
        <p className="text-red-500">{errors.translatable?.ru?.capacity.message}</p>
      )}
    </div>
  );
}

export default InfoNumber;
