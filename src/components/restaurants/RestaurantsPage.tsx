'use client'
import Image from 'next/image';
import Pagination from '../Pagination';
import Link from 'next/link';






function RestaurantsPage({res, currentPage, totalPages}: any) {


  return (
    <div>
      <h3 className='p-6 mt-2.5 text-center  m-auto text-4xl'>У нас представлены наиболее популярные ресторана города</h3>
      <div className=' p-10 flex flex-col md:grid md:grid-cols-2 md:gap-8 

'>
        
    
      {res.map((restaurant:any)=> (
        <Link href={restaurant.slug_name} key={restaurant.id} className=' bg-amber-300  border rounded-lg  flex flex-col'>
        
     
          {restaurant.images_url && restaurant.images_url.length > 0 ? (
            
   <div className="relative  rounded-lg">
 
  <Image 
    src={restaurant.images_url[0]} 
    alt={restaurant.translatable['ru'].name} 
    width={500} 
    height={500}
    className="aspect-25/26 overflow-hidden w-full"
  />
  
   
  <div className="absolute bottom-0 left-0 right-0 h-1/13 
    backdrop-blur-md 
    bg-black/40
    bg-linear-to-t from-black/80 via-black/40 to-transparent
  ">
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl text-center font-bold">{restaurant.translatable['ru'].name}</h3>
    </div>
  </div>
</div>
    ) : (
      <div>No image</div>  
    )}   <div className='flex flex-row justify-between px-2.5 py-3'>
            <p>Рейтинг ресторана {restaurant.average_rating}</p>
               <p>{restaurant.translatable['ru'].type_cuisine} кухня</p>
       
          </div>
        </Link>
         
      )  )}  </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default RestaurantsPage
