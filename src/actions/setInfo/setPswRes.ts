import { createClient } from '../../../supabase/supabase-client';

export async function setResPswd(validdatedForm) {
  const supabase = createClient();
  await supabase.auth.updateUser({ password: validdatedForm.data?.password });
}
