import React from 'react'

function ItemDescription({q}) {
  return (
          <div  className="flex items-start gap-4">
              <div className="flex-1">
      <p className="font-semibold text-xl">{q.name["ru"]}</p> 
                     <p>   {q.description["ru"]}</p> 
              </div>
                            
                                 <p>{q.price}</p>             
            </div>
  )
}

export default ItemDescription
