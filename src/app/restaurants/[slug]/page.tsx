 import ResInd from '@/components/restaurantIndividual/ResInd';
import { createClient } from '../../../../supabase/server';


async function RestaurantElement({
  params,
}: {
  params: Promise<{ slug: string }>
}) {


  const { slug } = await params


    
  const supabase = await createClient();
  const { data: res, error  } = await supabase.from("restaurants").select('*')
  .eq('slug_name', slug);
       console.log(error)
       console.log(res)
  return (
              <ResInd res={res} />  )
}

export default RestaurantElement
