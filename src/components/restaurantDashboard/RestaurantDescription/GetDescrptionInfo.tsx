import { getMenuItemFromTable } from '@/actions/menu/getMenuItemFromTable';
import DescriptionForm from './form/DescriptionForm';
import { fetchedDataRestaurant } from '../../restaurants/restaurantType';
async function GetDescrptionInfo() {
  const restuarant: fetchedDataRestaurant = await getMenuItemFromTable();

  return <DescriptionForm restuarant={restuarant} />;
}

export default GetDescrptionInfo;
