// import { getRequestConfig } from 'next-intl/server';
// import { headers } from 'next/headers';

// export default getRequestConfig(async ({ requestLocale }) => {
//    const requested = await requestLocale;

//   const headersList = await headers();
//   const locale = headersList.get('x-locale');
//   //    const localeCheck = hasLocale(routing.locales, requested)
//   //     ? requested
//   //     : routing.defaultLocale;
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
