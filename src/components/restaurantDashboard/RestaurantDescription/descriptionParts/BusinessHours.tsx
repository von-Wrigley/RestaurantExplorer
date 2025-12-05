   const daysOfWeek = [
  { id: 'monday', label: 'Понедельник' },
  { id: 'tuesday', label: 'Вторник' },
  { id: 'wednesday', label: 'Среда' },
  { id: 'thursday', label: 'Четверг' },
  { id: 'friday', label: 'Пятница' },
  { id: 'saturday', label: 'Суббота' },
  { id: 'sunday', label: 'Воскресенье' }
] as const

function BusinessHours({register}) {
 
  return (
 
    <div className=" bg-gray-300  ring shadow-xl ring-gray-900/5 min-w-fit h-fit p-5 rounded-sm">



      <table >
  <thead className="flex flex-row">
    <tr className="flex flex-row gap-24">
      <th>День недели</th>
      <th>Открытие</th>
      <th>Закрытие</th>
    </tr>
  </thead>
  <tbody >
   {daysOfWeek.map(day=> (
 <tr key={day.id} className="flex flex-row justify-end gap-10 my-2">
      <td className="w-full">{day.label}</td>
      <td><input {...register(`business_hours.${day.id}.open`)} type="text" className="rounded-md border bg-white"  /></td>
      <td><input {...register(`business_hours.${day.id}.close`)} type="text" className="border rounded-md bg-white"/></td>  
    </tr>
   )
    
)}
  </tbody>
</table>

    </div>
  )
}

export default BusinessHours
