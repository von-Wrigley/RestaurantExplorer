import { getMenuItemFromTable } from '@/actions/menu/getMenuItemFromTable';

async function ViewDescription() {
  const restaurant = await getMenuItemFromTable();

  return (
    <div className="sm:w-1/3 md:w-1/2 bg-white ">
      <p>{restaurant.email}</p>
    </div>
  );
}

export default ViewDescription;
