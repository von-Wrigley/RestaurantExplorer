 'use client'

import { getResRole } from '@/actions/analytics/getResRole'
import AnalyticsDashboard from './AnalyticsDashboard'
import { useEffect, useState } from 'react'
import { GetRes } from '@/actions/analytics/GetRes'
 






 function GetInfo() {
const currDte = new Date()
 const currDte2 = currDte.toISOString().split('T')[0]



 const [bookings, setBookings]= useState([])
  const [restaurant, setRestaurant]= useState('')

 useEffect(()=>{
 const getbookings = async()=>{
    const x =await getResRole(currDte2)
    const y = await GetRes()
       setBookings(x)
       setRestaurant(y)
 } 
 
 
 getbookings()
},
  [])
 
 
  return (
    <div>
         <AnalyticsDashboard bookings={bookings} restaurant={restaurant} />
    </div>
  )
}

export default GetInfo

