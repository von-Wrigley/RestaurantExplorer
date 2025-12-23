

export const getDatesReserv = (startDate)=> {
 console.log(startDate)
 
    const currentDate2 = new Date(startDate)
    currentDate2.setHours(0,0,0,0)

    return Array.from({length: 7},(_, i)=>{       
        const currentDate = new Date(currentDate2)
        currentDate.setDate(currentDate.getDate()+i) 
        currentDate.toISOString().split('T')[0]
        return currentDate
    } )





}