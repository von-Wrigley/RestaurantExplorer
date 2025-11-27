import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../../../supabase/server";



export async function GET(request: NextRequest) {

const supabase = await createClient()
 const { searchParams } = new URL(request.url);
 
  const token = searchParams.get('access_token')
  const type = searchParams.get('type')
  const next = searchParams.get("next") ?? "/restaurantDashboard";

console.log('token', token)
console.log('next', next)
// if(tokenHash && type === 'invite'){
//   try {
//     const { error} = await supabase.auth.verifyOtp({ token_hash: tokenHash, type:'invite'})
//     if(error){

//         throw(error)
//     }
//      return NextResponse.redirect(next);
    
//   } catch (error) {
//       console.log(error)
//   }
// }
  
}

