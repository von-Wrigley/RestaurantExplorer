'use client'
import { getFavoriteDish } from '@/actions/profile/getFavoriteDish';
import { Heart } from 'lucide-react';
import { useState } from 'react';





function ItemDescription({q, dataFav}) {
  const isFavOr = dataFav.includes(q.name["ru"])
  const [isfavorite, setIsFavorite] = useState<boolean>(isFavOr)
  const handleFavorite= async(x:string)=> {
      const res = await getFavoriteDish(x)

      if(res.success){
        setIsFavorite(res.isFavoriteDish)
      }
}

  return (
          <div  className="flex items-start gap-4">
              <div className="flex-1">
                <div className='flex flex-row gap-2'>
      <p className="font-semibold text-xl">{q.name["ru"]}</p> 
       <Heart onClick={()=>handleFavorite(q.name["ru"])} strokeWidth={1} size={20} className={isfavorite ? "self-center fill-red-500 hover:cursor-pointer" :  "self-center hover:fill-red-500 hover:cursor-pointer"}  />
                </div>
     
                     <p>   {q.description["ru"]}</p> 
              </div>
                            
                                 <p>{q.price}</p>             
            </div>
  )
}

export default ItemDescription
