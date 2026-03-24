import { CuisinetypeRu, Cuisinetype } from '@/static/res';
import { Controller } from 'react-hook-form';

function CuisineType({ setValue, control, register, getValues, watch, errors }) {
  const russianCuisine = watch('translatable.ru.type_cuisine');

  const handleCuisisneType = (selectedCuisine: string) => {
    if (!selectedCuisine) return;

    const CuisineTypeEn = Cuisinetype[selectedCuisine].en;
    const CuisineTypeEs = Cuisinetype[selectedCuisine].es;
    console.log(CuisineTypeEn);

    setValue('translatable.en.type_cuisine', CuisineTypeEn);
    setValue('translatable.es.type_cuisine', CuisineTypeEs);
  };
  return (
    <div className="bg-gray-300  ring shadow-xl ring-gray-900/5 p-3  rounded-lg h-fit">
      <h4>Тип Кухни</h4>
      <Controller
        name="translatable.ru.type_cuisine"
        control={control}
        render={({ field }) => (
          <div>
            {CuisinetypeRu.map((x) => (
              <label key={x} className="flex flex-row gap-x-1">
                <input
                  type="radio"
                  value={x}
                  checked={field.value === x}
                  onChange={(e) => {
                    const selectedCuisine = e.target.value;
                    field.onChange(selectedCuisine);
                    handleCuisisneType(selectedCuisine);
                  }}
                  className="border p-1 rounded-sm bg-white"
                />
                {x}
              </label>
            ))}
          </div>
        )}
      />
      {errors.translatable?.ru?.type_cuisine?.message && (
        <p className="text-red-500">{errors.translatable?.ru?.type_cuisine?.message}</p>
      )}
    </div>
  );
}

export default CuisineType;
