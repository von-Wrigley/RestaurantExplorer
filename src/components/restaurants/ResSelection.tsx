'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

function ResSelection() {
  const [choice, setChoice] = useState('');
  const [cuisineType, setCuisineType] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter()
  const handleCategory = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    setChoice(val);
  };

  const handleCuisinetype = (e:React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const checked = e.target.checked;

    let selectedCuisines;
    if (checked) {
      selectedCuisines = [...cuisineType, val];
      setCuisineType(selectedCuisines);
    } else {
      selectedCuisines = cuisineType.filter((x) => x !== val);
      setCuisineType(selectedCuisines);
    }
  };

  const handleSubmitRes = async () => {
    const x = new URLSearchParams(searchParams);
    x.set('category', choice);
    x.set('cuisines', cuisineType.join(','));
    window.history.replaceState({}, '', `${pathname}?${x}`);
    router.push(`${pathname}?${x}`)
  };
  return (
    <div className="max-w-full gap-y-2.5 mx-10 border py-2 rounded-md dark:border-darkmode-10 dark:text-white  border-amber-200 text-black flex flex-col md:flex-row justify-around">
     
     
      <select name="category" id="choose-category" onChange={handleCategory} value={choice}
      className={` w-fit self-center-safe
        cursor-pointer outline-none animate-btn-restaurant  dark:text-black border-2 dark:bg-stone-200 p-2 dark:border-darkmode-10 rounded-md`}
        >
        <option value="popular" > По популярности </option>
        <option value="dsc">Дороже</option>
        <option value="asc">Дешевле</option>
        <option value="rating">С высоким рейтингом</option>
      </select>
      <fieldset className="flex flex-row gap-2 flex-wrap px-3">
        <legend>Выберите тип кухни</legend>
        <div className="flex flex-row gap-0.5">
          <input
            type="checkbox"
            id="european"
            value="european"
            checked={cuisineType.includes('european')}
            onChange={handleCuisinetype}
          />
          <label htmlFor="european">Европейская</label>
        </div>
        <div className="flex flex-row gap-0.5">
          <input
            type="checkbox"
            id="caucasian"
            value="caucasian"
            checked={cuisineType.includes('caucasian')}
            onChange={handleCuisinetype}
          />
          <label htmlFor="caucasian">Кавказская</label>
        </div>
        <div className="flex flex-row gap-0.5">
          <input
            type="checkbox"
            id="asian"
            value="asian"
            checked={cuisineType.includes('asian')}
            onChange={handleCuisinetype}
          />
          <label htmlFor="asian">Азиатская</label>
        </div>
        <div className="flex flex-row gap-0.5">
          <input
            type="checkbox"
            id="middle_eastern"
            value="middle_eastern"
            checked={cuisineType.includes('middle_eastern')}
            onChange={handleCuisinetype}
          />
          <label htmlFor="middle_eastern">Ближневосточная</label>
        </div>
        <div className="flex flex-row gap-0.5">
          <input
            type="checkbox"
            id="latin_American"
            value="latin_American"
            checked={cuisineType.includes('latin_American')}
            onChange={handleCuisinetype}
          />
          <label htmlFor="latin_American">Латиноамериканская</label>
        </div>
      </fieldset>
      <button type="button" onClick={handleSubmitRes} 
      className='bg-amber-300 w-fit self-center-safe p-1 rounded-md  shadow-lg cursor-pointer hover:bg-amber-400 dark:text-black dark:bg-darkmode-10 dark:hover:bg-violet-700'>
        Применить
      </button>
    </div>
  );
}

export default ResSelection;
