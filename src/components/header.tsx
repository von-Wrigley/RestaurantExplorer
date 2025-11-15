import Link from "next/link"

 

function Header() {
  return (
    <div className="border rounded-b-3xl  p-4 flex flex-row justify-between font-bold text-3xl">
      <h4>loho</h4>
      <div><Link href='/auth' className="border-2 rounded-2xl p-2">log in</Link ></div>
    </div>
  )
}

export default Header
