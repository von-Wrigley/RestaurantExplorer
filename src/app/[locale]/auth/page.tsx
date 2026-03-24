import UserAuth from '@/components/user/UserAuth';
import UserIn from '@/components/user/UserIn';

function RegisterUSer() {
  return (
    <div className=" from-amber-200 to-amber-300  bg-linear-to-br dark:from-darkmode-10 dark:to-violet-700 min-w-1/4 h-1/4 my-auto  mx-auto  p-2 ">
      <div className="flex flex-row gap-9 p-14 bg-gray-100 dark:bg-black">
        <UserAuth />
        <UserIn />
      </div>
    </div>
  );
}

export default RegisterUSer;
