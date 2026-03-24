import ResInd from '@/components/restaurantIndividual/ResInd';
import { routing } from '@/i18n/routing';
import { Suspense } from 'react';
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function RestaurantElement({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResInd params={params} />;
    </Suspense>
  );
}

export default RestaurantElement;
