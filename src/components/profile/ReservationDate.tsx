import { getUserDate } from "@/actions/reserv/getUserDates"


async function ReservationDate() {
    const bookingData = await getUserDate()
    console.log(bookingData)
  return (
    <div>
      
    </div>
  )
}

export default ReservationDate
