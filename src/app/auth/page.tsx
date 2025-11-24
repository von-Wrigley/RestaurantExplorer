import UserAuth from "@/components/user/UserAuth"
import UserIn from "@/components/user/UserIn"

 
 

function RegisterUSer() {


  return (
    <div className="  min-w-1/4 h-1/4  mx-auto mt-10 p-6 ">
      <div className="flex flex-row gap-9">
          <UserAuth /> 
          <UserIn />
      </div>
    </div>
  )
}

export default RegisterUSer
