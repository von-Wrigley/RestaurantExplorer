import Sidebar from '@/components/restaurantDashboard/sidebar/Sidebar';

function layout(props: LayoutProps<'/restaurantDashboard'>) {
  return (
    <div className="flex flex-row gap-5 w-full">
      <div className="flex flex-col w-fit px-2 py-2  h-full bg-gray-100 rounded-sm justify-between dark:bg-black dark:border dark:border-darkmode-10">
        <Sidebar />
      </div>

      <main className="w-full">{props.children}</main>
    </div>
  );
}

export default layout;
