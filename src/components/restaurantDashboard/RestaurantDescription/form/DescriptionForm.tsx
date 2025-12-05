'use client'
import { useForm } from 'react-hook-form';
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

function DescriptionForm({restuarant}) {
    const {
    register,
    watch,
    getValues ,
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
        average_rating: restuarant.average_rating ?? 0,
        capacity: restuarant.capacity ?? 0,
        business_hours: restuarant.business_hours,
        parking: false,
        wifi: false,
        kids_room: false,
       
        translatable: {
            en: {
                city: restuarant.city ?? '',
                name: restuarant.name ?? '',
                address: restuarant.address ?? '',
                cuisines:[],
                services:[],
                description: 'Описание на английском',
                type_cuisine: '',
                special_occasion: [],
                dietary_restrictions:[]
            },
                     ru: {
                city: restuarant.city ?? '',
                name: restuarant.name ?? '',
                address: restuarant.address ?? '',
                cuisines:[],
                services:[],
                description: 'Описание на русском',
                type_cuisine: '',
                special_occasion: [],
                dietary_restrictions:[]
            },
                     es: {
                city: restuarant.city ?? '',
                name: restuarant.name ?? '',
                address: restuarant.address ?? '',
                cuisines:[],
                services:[],
                description: 'Описание на испанском',
                type_cuisine: '',
                special_occasion: [],
                dietary_restrictions:[]
            }
        }
    },
  });
   const onSubmit = async(data:RestaurantFormData) => {
     const slugName = slugify(data.translatable.en.name)

 
    const datatoDatabase = {
      ...data,
      slug_name:slugName
    }
      console.log('dasd, ',datatoDatabase)
    
  };
   const onError = (errors, e) => console.log(errors, e)

  return (
    <form className='flex flex-col  bg-white'  onSubmit={handleSubmit(onSubmit, onError)} >
        <div className='  flex flex-col'>
            <div className='  p-5 flex flex-col gap-y-4.5  lg:grid lg:grid-cols-3  lg:gap-y-8 lg:gap-x-3.5 '>
          {/* Название ресторана */}
          <InputMenuComp value='name' title='Название ресторана'  register={register} placeholder={{ru:'название на русском', en:'название на английском', es:'название на испанском'}} errors={errors}  />
           {/* Город */}
           <CityChoice register={register} errors={errors}/>
             {/* Адрес */}
              <RestaurantAddress register={register} errors={errors}/>
             {/* Вид кухни */}
            <Cuisines setValue={setValue} control={control} errors={errors} />
             {/* Услуги */}
   <Services   control={control} setValue={setValue} />
   <div className='flex flex-col gap-3'>
      {/* Тип кухни */}
    <CuisineType setValue={setValue} control={control} register={register} getValues ={getValues} watch={watch} errors={errors} />
 {/* Доп инфа по кухне */}
            <AdditionalInfoFood setValue={setValue} control={control}  />
   </div>
        {/* Информация о среднем чеке и числа мест в ресторане */}
          <InfoNumber register={register} errors={errors} control={control}/>
        {/* Информация о наличии вай фая, паркинга и десткой комнате */}
        <AdditionaalInformation  control={control}/>    
          {/* Контактная информарция */}
         <ContactInfo register={register} errors={errors}/>
                  {/* Особые события */}
             <SpecialOccasions setValue={setValue} control={control} errors={errors} />
              {/* Описасние */}
           <RestaurantDescription register={register} errors={errors}/>  
             {/* Часы работы */}
             <BusinessHours register={register} />
      
</div>
        </div>
      <input type="submit"  
      className='p-3 my-3 self-center-safe hover:bg-gray-600 hover:cursor-pointer bg-gray-400 shadow-xl ring ring-gray-900/10  text-white w-fit rounded-2xl'/>
    </form>
  )
}

export default DescriptionForm
