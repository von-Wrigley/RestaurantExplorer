'use client';

import { handleSignout } from '@/actions/auth/signout';
import { useTranslations } from 'next-intl';

function BtnSignout() {
  const t = useTranslations('HomePage');
  return (
    <button type="button" onClick={handleSignout}>
      <span className="font-dancingScript dark:text-white">{t('BtnSignout')}</span>{' '}
    </button>
  );
}

export default BtnSignout;
