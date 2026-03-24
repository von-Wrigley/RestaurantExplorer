import { CUISINE_OPTIONS, typesCuisineRu } from '@/static/res';
import { Controller } from 'react-hook-form';

function Cuisines({ setValue, control, errors }) {
  const handleCuisinestranslations = (checkedCusines) => {
    const checkedCuisinesEn = checkedCusines.map((x) => CUISINE_OPTIONS[x].en);
    const checkedCuisinesEs = checkedCusines.map((x) => CUISINE_OPTIONS[x].es);

    setValue('translatable.ru.cuisines', checkedCusines);
    setValue('translatable.en.cuisines', checkedCuisinesEn);
    setValue('translatable.es.cuisines', checkedCuisinesEs);
  };
  return (
    <div className="flex flex-col bg-gray-300  ring shadow-xl ring-gray-900/5 p-3.5">
      <h3>Выберите вид кухни </h3>
      <Controller
        control={control}
        name="translatable.ru.cuisines"
        render={({ field }) => (
          <div>
            {typesCuisineRu.map((x) => (
              <label key={x} className="flex flex-row gap-1">
                <input
                  type="checkbox"
                  checked={field.value.includes(x)}
                  onChange={(e) => {
                    let checkedCusines = [];
                    if (e.target.checked) {
                      checkedCusines = [...field.value, x];
                    } else {
                      checkedCusines = field.value.filter((cui) => cui !== x);
                    }
                    handleCuisinestranslations(checkedCusines);
                  }}
                />
                {x}
              </label>
            ))}
          </div>
        )}
      />

      {errors.translatable?.ru?.cuisines?.message && (
        <p className="text-red-500">{errors.translatable?.ru?.cuisines?.message}</p>
      )}
    </div>
  );
}

export default Cuisines;
