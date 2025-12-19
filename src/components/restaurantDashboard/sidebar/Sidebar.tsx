import React from 'react'
import { type LucideIcon, PencilRuler,ChartSpline , Settings, SquareMenu, CalendarDays  } from 'lucide-react';
import Link from 'next/link';

type sidebarElementsTP ={
    href: string,
    icon: LucideIcon,

}

const sidebarElements:sidebarElementsTP[] = [
    {
 href: '/restaurantDashboard/description',
 icon: PencilRuler
 },
     {
 href: '/restaurantDashboard/menu',
 icon: SquareMenu
 },
     {
 href: '/restaurantDashboard/calendar',
 icon: CalendarDays
 },
      {
 href: '/restaurantDashboard/analytics',
 icon: ChartSpline
 },
      {
 href: '/restaurantDashboard/settings',
 icon: Settings
 }

]



function Sidebar() {

  return (
 <nav className='flex flex-col gap-7'>
    {sidebarElements.map((x, index)=>(
        <Link key={index} href={x.href} className='w-fit h-fit border rounded-sm p-2 hover:shadow-2xl fill-amber-300 hover:outline-none hover:border-amber-300 hover:ring-2 hover:ring-amber-300'>
             <x.icon />
        </Link>
    ) )}

 </nav>

    
  )
}

export default Sidebar



