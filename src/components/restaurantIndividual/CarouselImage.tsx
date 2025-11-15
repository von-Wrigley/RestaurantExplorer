'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Key, useState } from 'react';



function CarouselImage({imageres}:any) {

const [currentIndex, setCurrentIndex] = useState<number>(0)

 const currentImageStyle = (index:number)=> {

     const position =  (index-currentIndex + imageres.length ) % imageres.length


      if(position === 0 ){
        return 'z-20 opacity-100 scale-100'
      }

      else if(position === 1){
        return 'z-10 opacity-80 scale-90 translate-x-1/4 '
      }

      else if(position ===  imageres.length-1){
        return 'z-10 opacity-80 scale-90 -translate-x-1/4'
      }
      else {
        return 'opacity-0 z-0'
      }

 }


  return (
    <div className='relative w-full max-w-6xl mx-auto h-[35vh]  overflow-hidden '>

  {imageres.map((image: string, index: number)=> (
            <div key={index}  
                   className={`absolute top-0 left-1/4 w-1/2 h-full 
                   ${currentImageStyle(index)}   
                   transition-all duration-500 ease-in-out `} > 
            <Image 
          width={300} 
          height={300} 
          src={image} 
          alt={'Image'}
          className='w-full h-full rounded-2xl '
     />


            </div>
           

        ))}

        <button className='absolute left-20 bg-slate-800 text-white transform -translate-y-1/2 rounded-2xl hover:bg-black top-1/2 p-3'
                      onClick={()=> setCurrentIndex((prev)=>(prev - 1 + imageres.length)  % imageres.length )    }>
           ‹
        </button>

         <button className='absolute right-20 bg-slate-800 text-white transform -translate-y-1/2 hover:bg-black rounded-2xl top-1/2 p-3'
            onClick={()=> setCurrentIndex((prev)=>(prev + 1)  % imageres.length )    }>
         
            ›
        </button>
        </div>
  )
}

export default CarouselImage
