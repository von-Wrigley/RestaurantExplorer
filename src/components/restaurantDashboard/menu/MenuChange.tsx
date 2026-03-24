import { getMenuItemFromTable } from '@/actions/menu/getmenu';
import MenItem from './parts/MenItem';

async function MenuChange() {
  const res = await getMenuItemFromTable();
  return <MenItem res={res} />;
}

export default MenuChange;
