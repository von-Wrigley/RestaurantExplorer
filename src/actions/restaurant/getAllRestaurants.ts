import { cacheLife, cacheTag } from 'next/cache';
import { createClient } from '../../../supabase/anon';





export const getAllRestairants = async ({ searchParams }: { searchParams: {category?: string; cuisines: string; page:number} }) => {
  'use cache';
  cacheTag('restaurants-list');
  cacheLife('days');

const supabase = createClient();
const elements = await searchParams
const checkCuisisnes  =elements.cuisines || ''
const cuisineParams =checkCuisisnes ? elements.cuisines.split(',') : []

const categoryParam = elements.category

  console.log('searchParams', await searchParams, cuisineParams, categoryParam);
  const cardsPerPage = 4;
  const serachpage = (await searchParams).page;
   
  const currentPage = Number(serachpage) || 1;
  const fromPage = (currentPage - 1) * cardsPerPage;
  const toPage = fromPage + cardsPerPage - 1;

let query2 = supabase.from('restaurants').select('*', { count: 'exact' }).eq('is_completed', true)
  if(categoryParam==='asc'){
    query2 = query2.order('price_range',  {ascending: true})
  }
  else if(categoryParam==='dsc'){
    query2= query2.order('price_range', {ascending:false})
  }
  else if(categoryParam === 'rating'){
    query2 = query2.order('average_rating', {ascending:false})
  }
 
  if(!cuisineParams.includes('') && cuisineParams.length>0){
          const allCuisines = cuisineParams.map((x:string)=> `translatable->en->>type_cuisine.ilike.${x}`).join(',')
  query2 = query2.or(allCuisines)

  }


   console.log(query2)
  const { data: restaurant, count } = await query2
    .range(fromPage, toPage);

  const totalPages = count ? Math.ceil(count / cardsPerPage) : 1;
  const res = restaurant || [];
  return { res, totalPages };
};
