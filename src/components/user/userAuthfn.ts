'use server';

import { createAdminClient } from '../../../supabase/server-admin';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function userAuthfn(previousState: any, formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = createAdminClient();
  const { error, data } = await supabase.auth.admin.createUser({
    password,
    email,
    user_metadata: {
      full_name: name,
      role: 'user',
    },
    email_confirm: true,
  });
  if (error) {
    console.log('Error in auth user. ', error.message);
  }

  const { error: errorProfile } = await supabase.from('profiles').insert({
    email,
    name,
    id: data.user?.id,
  });

  if (errorProfile) {
    console.log('Error in creating user in profile table. ', errorProfile);
  }
}
