'use client';
import { UtensilsCrossed } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

function Logo() {
  const locale = useLocale();
  return (
    <div className="flex flex-row gap-2 items-center-safe">
      <Link href={`/${locale}/restaurants`}>
        <UtensilsCrossed className="dark:fill-white" />
      </Link>

      <h4 className="dark:text-white">Logo</h4>
    </div>
  );
}

export default Logo;
