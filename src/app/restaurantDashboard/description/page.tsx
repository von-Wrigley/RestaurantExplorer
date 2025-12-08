import GetDescrptionInfo from "@/components/restaurantDashboard/RestaurantDescription/GetDescrptionInfo"
import ViewDescription from "@/components/restaurantDashboard/RestaurantDescription/ViewDescription"
import { ArrowBigLeftDash } from "lucide-react"
import Link from "next/link"


function DescriptionView() {

  return (
    <div className="w-full">
      <div className="flex flex-row">
      <Link href={'/restaurantDashboard'} className="self-center"><ArrowBigLeftDash /></Link>
      <h1 className="p-5 text-3xl mx-auto">Конструктор описания ресторна</h1>
      </div>
     
      <div className="flex sm:flex-row flex-col justify-between rounded-2xl h-auto gap-y-10 sm:gap-1.5  bg-amber-200/30">
        <ViewDescription />
        <GetDescrptionInfo />
      </div>
    </div>
  )
}

export default DescriptionView
