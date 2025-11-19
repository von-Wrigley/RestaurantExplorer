 
import CarouselImage from './CarouselImage';
import TimeTable from './TimeTable';
import MenuItem from './MenuItem';


function ResInd({res}:any) {
  return (
      <div className=' my-3 rounded-t-2xl w-full  '>
       {res?.map( restuarant=> (
         <div key={restuarant.id}>
        <CarouselImage imageres={restuarant.images_url} />
        <section className=''>
        <h2 className='text-center pt-3.5 text-5xl'>{restuarant.translatable['ru'].name}</h2>
        <p className='text-center  pt-2 text-lg w-2/5 mx-auto'>{restuarant.translatable['ru'].description}</p>
        </section>
        
        <div className='flex flex-row gap-8 mt-8 items-start'>

   
     <section className='border-amber-300 border-2
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl  bg-white  flex-2'>
    <MenuItem resId={restuarant.id} />
      </section>

         <section className=' border-amber-300 border-2
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl  bg-white w-fit '>
      
        <TimeTable timeT={restuarant.business_hours} />
      </section>


       <section className='flex flex-col gap-4 p-4 border-amber-300 border-2
       hover:shadow-2xl
        transition-all duration-150 ease-in-out
      rounded-2xl  bg-white  flex-1 '>
        <h4 className='text-center text-2xl'>Дополнительная информация</h4>
               <span className='font-bold text-lg'>Услуги</span>
               <div className='flex flex-row gap-2.5 flex-wrap'>
       {restuarant.translatable['ru'].services.map((x, index)=> (
                <p className='bg-amber-300 shadow-lg shadow-amber-300/50 hover:shadow-amber-300/80 px-2 w-fit p-1 rounded-md' key={index}>
                    {x}
                </p>
                
            ) )} 
            
               </div>
           
            <div>
                
            </div>
            <span className='font-bold text-lg'>Бронирование на особые случаи</span>
               <div className='flex flex-row gap-2.5 flex-wrap'>
            {restuarant.translatable['ru'].special_occasions.map((x, index)=> (
                <p className='bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md' key={index}>
                    {x}
                    
                </p>
                
            ) )} 
            
               </div>

            <div>
                  <span className='font-bold text-lg'>Вместимость ресторана:</span> <span> {restuarant.capacity} персон</span>
            </div>
              
              
                    {(restuarant.parking || restuarant.wifi || restuarant.kids_room) &&    <span className='font-bold text-lg'>Остальное</span>   }
                   <div  className='flex flex-row gap-2.5 flex-wrap'>
                    {restuarant.parking && <span className='bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md'>Паркинг</span>}
                    {restuarant.wifi && <span className='bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md'>WIFI</span>}
                    {restuarant.kids_room && <span className='bg-amber-300 shadow-lg shadow-amber-300/50 px-2 w-fit p-1 rounded-md'>Детская игроваяя комната</span>}
                  
                   </div>
                 <div>
                   <h4 className='font-bold text-lg'>Контакты</h4>
        <p className=' pt-2 w-fit'><span className='font-semibold'>Почта: </span>  {restuarant.email}</p>
         <p className=' pt-2 w-fit '><span className='font-semibold'>Номер телефона: </span> {restuarant.phone_number}</p>
                 </div>
      
            
      


      </section>

        </div>
        
        
        
        
        
        
        
        
        
       



         </div>
       ))}



    
    </div>
  )
}

export default ResInd
