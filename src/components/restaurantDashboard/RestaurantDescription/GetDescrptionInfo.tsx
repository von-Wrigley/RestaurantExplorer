
import { getMenuItemFromTable } from '@/actions/menu/getMenuItemFromTable'
import DescriptionForm from './form/DescriptionForm'
 


async function GetDescrptionInfo() {
    const restuarant = await getMenuItemFromTable()
    

  return (
    
      <DescriptionForm restuarant={restuarant} />
    
  )
}

export default GetDescrptionInfo
