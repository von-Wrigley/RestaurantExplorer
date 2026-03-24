import { createClient } from '../../../supabase/anon';

export async function getallMenu() {
  const supabase = await createClient();

  const { data: menu, error } = await supabase.from('menus').select('*').limit(1);
  return menu;
}
