'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

type languagetype = 'en' | 'ru' | 'es';

const languagestrans: Partial<Record<languagetype, string>> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
};

function LangSwitcher() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang: string) => {
    console.log(`${lang}${pathname}`);
    router.push(`${pathname}`, { locale: lang });
  };
  return (
    <div>
      <select
        aria-label="languageSwitcher"
        className=" text-lg font-light   text-black dark:text-white dark:border-darkmode-10 rounded-lg align-center"
        value={locale}
        onChange={(e) => switchLanguage(e.target.value)}
      >
        {routing?.locales.map((lang) => (
          <option className="dark:bg-black  dark:border-darkmode-10 " key={lang} value={lang}>
            {languagestrans[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LangSwitcher;
