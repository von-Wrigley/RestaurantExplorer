'use client';

import { useTranslations } from 'next-intl';

function TitleRes() {
  const t = useTranslations('Restaurants');

  return (
    <h1 className="p-6 mt-2.5 text-center m-auto text-4xl dark:text-white ">{t('restaurantH1')}</h1>
  );
}

export default TitleRes;
