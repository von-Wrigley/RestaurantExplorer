type dayTypes = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface timeTableType {
  open: string;
  close: string;
}
export type lang = 'en' | 'es' | 'ru';
export interface restaurantIndividual {
  city: string;
  name: string;
  address: string;
  cuisines: string[];
  services: string[];
  description: string;
  type_cuisine: string;
  special_occasions: string[];
  dietary_restrictions: string[];
}
export interface fetchedDataRestaurant {
  id: number;
  created_at: string;
  email: string;
  phone_number: string;
  images_url: string[] | [];
  business_hours: Record<dayTypes, timeTableType>;
  latitude: null;
  longitude: null;
  price_range: number;
  telegram: null;
  average_rating: number;
  capacity: number;
  parking: boolean;
  wifi: boolean;
  kids_room: boolean;
  translatable: Record<lang, restaurantIndividual>;
  slug_name: string;
  owner_id: null;
  is_completed: boolean;
  res_name: null;
  role: string;
  tables: string;
}
export interface imageType {
  imageres: string[] | [];
}

export interface menuItemDescription {
  category: string;
  description: Record<lang, string>;
  id: number;
  name: Record<lang, string>;
  price: number;
}
