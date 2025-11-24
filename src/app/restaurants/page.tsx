 
 

import { createClient } from '../../../supabase/server';

import RestaurantsPage from '@/components/restaurants/RestaurantsPage';

interface PageProps  {
         params: {
          page: string
         }
}
 

export default async function RestaurantsList(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>}) {
    

  const searchParams= await props.searchParams
  
  

   const currentPage =   Number(searchParams?.page) || 1;
   const cardsPerPage = 4;
   const fromPage = (currentPage - 1) * cardsPerPage;
   const toPage = fromPage + cardsPerPage - 1;
 
  const supabase = await createClient();




  const { data: res, error, count  } = await supabase.from("restaurants").select('*', { count: 'exact' }).eq('is_completed', true).range(fromPage, toPage);
       console.log(error)
         const totalPages = count ? Math.ceil(count/cardsPerPage) : 1;

  return (
    <div className=' min-w-3/4 mt-5.5 m-auto'>
       <RestaurantsPage res={res} totalPages={totalPages} currentPage={currentPage}  />
    </div>
    
  )
}