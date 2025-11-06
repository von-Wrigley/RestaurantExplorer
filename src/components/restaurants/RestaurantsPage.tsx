'use client'

function RestaurantsPage({res}: any) {

  return (
    <div>
      <h3>restautants</h3>
      {res.map((restaurant:any)=> (
        <div key={restaurant.id}>
           <p >{restaurant.name}</p>     
           <p>{restaurant.email}</p>
        </div>
         
      )  )}
    </div>
  )
}

export default RestaurantsPage
