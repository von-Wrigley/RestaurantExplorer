

function GetTime({setTable, setGetTime, setGetTable}) {
  return (
   <>
      {setTable?.filter(x=>!x[1].isFull).map((x, index)=> (
       <button key={index} onClick={()=> {
        const tm = `${x[0]}:00 - ${parseInt(x[0])+1}:00`
        const tableSet = x[1].freeTables
 
         setGetTime((prev)=> ({
          ...prev, tm
         }) )
         setGetTable(tableSet)
       }} 
       className="hover:cursor-pointer self-start bg-gray-300 rounded-sm hover:bg-violet-500 active:bg-violet-500">

        { <h5 className="p-2 text-2xl"> {x[0]}:00 - {parseInt(x[0])+1}:00 </h5> }

       </button>
   ))}
   </>
  )
}

export default GetTime
