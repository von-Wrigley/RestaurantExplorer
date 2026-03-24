import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

async function Signin() {
  const t = await getTranslations('HomePage');
  console.log('translate', t('headerSign'));
  return (
    <Link href="/ru/auth" className=" dark:text-white">
      <span className="text-2xl">{t('headerSign')}</span>
    </Link>
  );
}

export default Signin;
