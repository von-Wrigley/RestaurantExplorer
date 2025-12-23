'use client'
import { Line, LineChart } from 'recharts';


   const data = [
  {
    name: 'Page A',
    users: 4000,
  },
  {
    name: 'Page B',
    users: 3000,
  },
  {
    name: 'Page C',
    users: 2000,
  },
  {
    name: 'Page D',
    users: 2780,
  },
  {
    name: 'Page E',
    users: 1890,
  },
  {
    name: 'Page F',
    users: 2390,
  },
  {
    name: 'Page G',
    users: 3490,
  },
];

function AnalyticsDashboard({bookings, restaurant}) {
  const numofResToday = bookings.length - Number(restaurant)
    const aveargeTable = (bookings.length  /  Number(restaurant[0].tables)) *100
   console.log(aveargeTable)
  return (
    <div className='h-full w-full'>
       <LineChart
      width={120}
      height={70}
      responsive
      className='border p-1 rounded-md bg-white'
      data={data}
    >
      <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
 
    </LineChart>
    <p>{aveargeTable} %</p>
    </div>
  )
}

export default AnalyticsDashboard
