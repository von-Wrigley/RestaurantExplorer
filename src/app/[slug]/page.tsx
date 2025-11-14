import { createClient } from '../../../supabase/server';
 

async function RestaurantElement({
  params,
}: {
  params: Promise<{ slug: string }>
}) {


  const { slug } = await params
 console.log(slug)

    
  const supabase = await createClient();
  const { data: res, error, count  } = await supabase.from("restaurants").select('*')
  .eq('slug_name', slug);
       console.log(error)
       console.log(res)
  return (
    <div>
      <h1>sdfsdff</h1>
    </div>
  )
}

export default RestaurantElement
