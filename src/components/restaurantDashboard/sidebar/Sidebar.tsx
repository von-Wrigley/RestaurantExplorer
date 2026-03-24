import React from 'react';
import {
  type LucideIcon,
  PencilRuler,
  ChartSpline,
  Settings,
  SquareMenu,
  CalendarDays,
} from 'lucide-react';
import Link from 'next/link';

type sidebarElementsTP = {
  href: string;
  icon: LucideIcon;
};

const sidebarElements: sidebarElementsTP[] = [
  {
    href: '/ru/restaurantDashboard/description',
    icon: PencilRuler,
  },
  {
    href: '/ru/restaurantDashboard/menu',
    icon: SquareMenu,
  },
  {
    href: '/ru/restaurantDashboard/calendar',
    icon: CalendarDays,
  },
  {
    href: '/ru/restaurantDashboard/analytics',
    icon: ChartSpline,
  },
  {
    href: '/ru/restaurantDashboard/settings',
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <nav className="flex flex-col gap-7 ">
      {sidebarElements.map((x, index) => (
        <Link
          key={index}
          href={x.href}
          className="w-fit h-fit border rounded-sm p-2 hover:shadow-2xl dark:border-darkmode-10  dark:hover:ring-darkmode-10 dark:hover:border-darkmode-10 dark:hover:outline-none  hover:outline-none hover:border-amber-300 hover:ring-2 hover:ring-amber-300"
        >
          <x.icon className="dark:text-white dark:active:text-darkmode-10" />
        </Link>
      ))}
    </nav>
  );
}

export default Sidebar;
