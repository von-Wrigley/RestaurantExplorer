'use client'
import { Line, LineChart, XAxis, YAxis } from 'recharts';


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

function AnalyticsDashboard() {


  return (
    <div className='h-full w-full'>
       <LineChart
      width={120}
      height={70}
      responsive
      className='border p-1 rounded-md'
      data={data}
    >
      <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
 
    </LineChart>
    </div>
  )
}

export default AnalyticsDashboard
