import { checkauth } from '@/actions/auth/checkAuth';
import BtnSignout from '../BtnSignout';
import LangSwitcher from '../LangSwitcher';
import Signin from '../Signin';
import Toggle from '../Toggle';

async function HeaderSuspenseElemnents() {
  const { user } = await checkauth();

  return (
    <div className="flex flex-row gap-2 items-center">
      <LangSwitcher />
      <Toggle />
      <nav>{user?.aud === 'authenticated' ? <BtnSignout /> : <Signin />}</nav>
    </div>
  );
}

export default HeaderSuspenseElemnents;
