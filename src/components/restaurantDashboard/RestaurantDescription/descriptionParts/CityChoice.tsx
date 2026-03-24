function CityChoice({ register, errors }) {
  return (
    <div className="flex flex-col gap-1.5 bg-gray-100 p-3.5 rounded-sm h-fit   ring shadow-xl ring-gray-900/5">
      <h4>Город</h4>
      <input
        {...register('translatable.ru.city')}
        placeholder="Город на русском"
        className="border p-1 rounded-sm bg-white"
      />
      <input
        {...register('translatable.en.city')}
        placeholder="Город на английском"
        className="border p-1 rounded-sm bg-white"
      />
      <input
        {...register('translatable.es.city')}
        placeholder="Город на испанском"
        className="border p-1 rounded-sm bg-white"
      />
      {errors.translatable?.ru?.city?.message && (
        <p className="text-red-500">{errors.translatable?.ru?.city?.message}</p>
      )}
    </div>
  );
}

export default CityChoice;
