import Link from 'next/link'
import { PencilRuler, Settings, SquareMenu } from 'lucide-react';


function page() {
  return (
    <div>
      
       <div className='flex flex-col w-fit px-3 py-4  h-full bg-amber-100 justify-between'>
        <div className='flex flex-col gap-7'>
            
       <Link href={'restaurantDashboard/description'} 
       className='w-fit h-fit' >
        <PencilRuler/>
        </Link>
       <Link href={'restaurantDashboard/menu'}>    
       <SquareMenu />
        </Link>
        </div>
        <Link href={'restaurantDashboard/settings'} className='self-center-safe '>
        <Settings />
        </Link>
       </div>
  
    </div>
  )
}

export default page
