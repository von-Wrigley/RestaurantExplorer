'use client';
import { FieldErrors, useForm } from 'react-hook-form';
import InputMenuComp from '../descriptionParts/InputMenuComp';
import Cuisines from '../descriptionParts/Cuisines';
import Services from '../descriptionParts/Services';
import SpecialOccasions from '../descriptionParts/SpecialOccasions';
import AdditionalInfoFood from '../descriptionParts/AdditionalInfoFood';
import CuisineType from '../descriptionParts/CuisineType';
import AdditionaalInformation from '../descriptionParts/AdditionaalInformation';
import ContactInfo from '../descriptionParts/ContactInfo';
import InfoNumber from '../descriptionParts/InfoNumber';
import CityChoice from '../descriptionParts/CityChoice';
import RestaurantAddress from '../descriptionParts/RestaurantAddress';
import RestaurantDescription from '../descriptionParts/RestaurantDescription';
import { RestaurantFormData, restaurantSchema } from '@/static/res';
import { zodResolver } from '@hookform/resolvers/zod';
import { slugify } from '@/actions/description/slugify';
import BusinessHours from '../descriptionParts/BusinessHours';
import UploadImaagestoStorage from '../descriptionParts/UploadImaagestoStorage';
import { createClient } from '../../../../../supabase/supabase-client';
import { getRes } from '@/actions/getInfo/getRes';
import { fetchedDataRestaurant } from '../../../restaurants/restaurantType';

function DescriptionForm({ restuarant }: { restuarant: fetchedDataRestaurant }) {
  const {
    register,
    watch,
    getValues,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RestaurantFormData>({
    resolver: zodResolver(restaurantSchema),
    mode: 'onChange',
    defaultValues: {
      email: restuarant.email ?? 'example.com',
      phone_number: restuarant.phone_number ?? '+7 (000) 000-00-00',
      price_range: restuarant.price_range,
      capacity: restuarant.capacity ?? 0,
      business_hours: restuarant.business_hours,
      images_url: restuarant.images_url ?? [],
      slug_name: restuarant.slug_name ?? '',
      parking: false,
      wifi: false,
      kids_room: false,

      translatable: {
        en: {
          city: restuarant.translatable.en.city ?? '',
          name: restuarant.translatable.en.name ?? '',
          address: restuarant.translatable.en.address ?? '',
          cuisines: [],
          services: [],
          description: 'Описание на английском',
          type_cuisine: '',
          special_occasions: [],
          dietary_restrictions: [],
        },
        ru: {
          city: restuarant.translatable.ru.city ?? '',
          name: restuarant.translatable.ru.name ?? '',
          address: restuarant.translatable.ru.address ?? '',
          cuisines: [],
          services: [],
          description: 'Описание на русском',
          type_cuisine: '',
          special_occasions: [],
          dietary_restrictions: [],
        },
        es: {
          city: restuarant.translatable.es.city ?? '',
          name: restuarant.translatable.es.name ?? '',
          address: restuarant.translatable.es.address ?? '',
          cuisines: [],
          services: [],
          description: 'Описание на испанском',
          type_cuisine: '',
          special_occasions: [],
          dietary_restrictions: [],
        },
      },
    },
  });

  const onSubmit = async (data: RestaurantFormData) => {
    const slugName = slugify(data.translatable.en.name);
    console.log('imagesurlform     ', getValues('images_url'));

    const datatoDatabase = {
      ...data,
      slug_name: slugName,
    };
    console.log('dasd, ', datatoDatabase);

    const user = await getRes();
    console.log(user);

    const updatedData = {
      email: data.email,
      phone_number: data.phone_number,
      price_range: data.price_range,
      capacity: data.capacity,
      business_hours: data.business_hours,
      images_url: data.images_url ?? [],
      parking: data.parking,
      wifi: data.wifi,
      is_completed: true,
      res_name: data.translatable.en.name,
      slug_name: slugName,
      kids_room: data.kids_room,
      translatable: {
        en: {
          city: data.translatable.en.city,
          name: data.translatable.en.name,
          address: data.translatable.en.address,
          cuisines: data.translatable.en.cuisines,
          services: data.translatable.en.services,
          description: data.translatable.en.description,
          type_cuisine: data.translatable.en.type_cuisine,
          special_occasions: data.translatable.en.special_occasions,
          dietary_restrictions: data.translatable.en.dietary_restrictions,
        },
        ru: {
          city: data.translatable.ru.city,
          name: data.translatable.ru.name,
          address: data.translatable.ru.address,
          cuisines: data.translatable.ru.cuisines,
          services: data.translatable.ru.services,
          description: data.translatable.ru.description,
          type_cuisine: data.translatable.ru.type_cuisine,
          special_occasions: data.translatable.ru.special_occasions,
          dietary_restrictions: data.translatable.ru.dietary_restrictions,
        },
        es: {
          city: data.translatable.es.city,
          name: data.translatable.es.name,
          address: data.translatable.es.address,
          cuisines: data.translatable.es.cuisines,
          services: data.translatable.es.services,
          description: data.translatable.es.description,
          type_cuisine: data.translatable.es.type_cuisine,
          special_occasions: data.translatable.es.special_occasions,
          dietary_restrictions: data.translatable.es.dietary_restrictions,
        },
      },
    };
    console.log(restuarant.owner_id, 'click');

    const supabase = createClient();
    const { error: erTable } = await supabase
      .from('restaurants')
      .update(updatedData)
      .eq('owner_id', restuarant.owner_id);

    if (erTable) {
      console.log('erTable ', erTable);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors: FieldErrors<RestaurantFormData>, e: any) => console.log(errors, e);

  return (
    <form className="flex flex-col  bg-white" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="  flex flex-col">
        <div className="  p-5 flex flex-col gap-y-4.5  lg:grid lg:grid-cols-3  lg:gap-y-8 lg:gap-x-3.5 ">
          {/* Название ресторана */}
          <InputMenuComp
            value="name"
            title="Название ресторана"
            register={register}
            placeholder={{
              ru: 'название на русском',
              en: 'название на английском',
              es: 'название на испанском',
            }}
            errors={errors}
          />
          {/* Город */}
          <CityChoice register={register} errors={errors} />
          {/* Адрес */}
          <RestaurantAddress register={register} errors={errors} />
          {/* Вид кухни */}
          <Cuisines setValue={setValue} control={control} errors={errors} />
          {/* Услуги */}
          <Services control={control} setValue={setValue} />
          <div className="flex flex-col gap-3">
            {/* Тип кухни */}
            <CuisineType
              setValue={setValue}
              control={control}
              register={register}
              getValues={getValues}
              watch={watch}
              errors={errors}
            />
            {/* Доп инфа по кухне */}
            <AdditionalInfoFood setValue={setValue} control={control} />
          </div>
          {/* Информация о среднем чеке и числа мест в ресторане */}
          <InfoNumber register={register} errors={errors} control={control} />
          {/* Информация о наличии вай фая, паркинга и десткой комнате */}
          <AdditionaalInformation control={control} />
          {/* Контактная информарция */}
          <ContactInfo register={register} errors={errors} />
          {/* Особые события */}
          <SpecialOccasions setValue={setValue} control={control} errors={errors} />
          {/* Описасние */}
          <RestaurantDescription register={register} errors={errors} />
          {/* Часы работы */}
          <BusinessHours register={register} />
          {/* Загрузка изображений */}
          <UploadImaagestoStorage
            register={register}
            id={restuarant.owner_id}
            setValue={setValue}
          />
        </div>
      </div>
      <input
        type="submit"
        className="p-3 my-3 self-center-safe hover:bg-gray-600 hover:cursor-pointer bg-gray-400 shadow-xl ring ring-gray-900/10  text-white w-fit rounded-2xl"
      />
    </form>
  );
}

export default DescriptionForm;
