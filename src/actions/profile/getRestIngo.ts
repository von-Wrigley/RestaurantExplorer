'use server';
import { createClient } from '../../../supabase/server';

export const getRestIngo = async (): Promise<
  [number, Array<[string, number, string]>, Array<[string, number]>]
> => {
  const supabase = await createClient();
  const {
    data: { user },
    error: errorUser,
  } = await supabase.auth.getUser();
  if (errorUser) {
    console.log(errorUser);
  }

  const { data, error } = await supabase
    .from('booking')
    .select('sum,start_time, restaurants:res_id(slug_name, translatable->ru->>name)  ')
    .eq('user_id', user?.id)
    .eq('status', 'fulfilled');
  if (error) {
    console.log(error);
  }

  let totalSum: number = 0;
  for (const elem of data || []) {
    totalSum += parseInt(elem.sum);
  }

  const frequencyName = new Map(); // топ посещеых ресторанов
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?.map((elem: any) => {
    const name = elem.restaurants.name;
    frequencyName.set(name, (frequencyName.get(name) || 0) + 1);
  });
  const sorteedFavesRes = [...frequencyName.entries()].sort((a, b) => b[1] - a[1]);
  const newsortedar = sorteedFavesRes.map((q) => {
    const prslufg = data?.find((x) => x.restaurants.name === q[0]);
    console.log(prslufg);
    return [q[0], q[1], prslufg?.restaurants.slug_name];
  });

  const preferredTime = {
    evening: 0,
    afternoon: 0,
    morning: 0,
    total: 0,
  };

  for (const fav of data || []) {
    const slicedDate = fav.start_time.slice(0, 2);
    preferredTime.total++;
    if (slicedDate < 18 && slicedDate >= 12) {
      preferredTime.afternoon++;
    } else if (slicedDate >= 18) {
      preferredTime.evening++;
    } else preferredTime.morning++;
  }
  const sortedPreferedTime = Object.entries(preferredTime).sort((a, b) => b[1] - a[1]);
  console.log(newsortedar);
  return [totalSum, newsortedar, sortedPreferedTime];
};
