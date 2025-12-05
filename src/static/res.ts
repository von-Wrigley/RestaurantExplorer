import z from "zod"

//Доп услуги
export const serviceTranslations = {
  'доставка': {
    en: 'delivery',
    es: 'entrega a domicilio'
  },
'бронирование столиков': {
    en: 'table reservation', 
    es: 'reserva de mesas'
  },
  'еда навынос': {
    en: 'takeaway',
    es: 'comida para llevar'
  },
  'веранда': {
    en: 'veranda',
    es: 'terraza'
  }
}

export const resServicesRu = [
    "доставка", 'бронирование столиков', 'еда навынос','веранда'
]
//Особвые события
export const specialOccasions = [
    "дни рождения","вечеринки", "тематические вечера",
    "летние вечеринки","средиземноморские ужины","семейные праздники",
    "восточные праздники","тематические ужины",'свадьбы',
      "русские праздники","семейные обеды","фольклорные вечера",
      "масленица","бизнес ланчи","романтические ужины",
      "китайские праздники","банкеты","свидания",
      "деловые встречи","испанские вечера","тапас-вечеринки",
      "фламенко шоу", "индийские праздники",    "дегустации саке",
]

export const specialOccasionstranslations = {
        "дегустации саке": {
        en: 'sake tastings',
        es: "cata de sake"
    },
    "индийские праздники": {
        en: 'indian holidays',
        es: "fiestas indias"
    },
    "дни рождения": {
    en: 'birthdays',
    es: 'cumpleaños'
  },"вечеринки": {
    en: 'parties',
    es: 'fiestas'
  }, "тематические вечера": {
    en: 'themed evenings',
    es: 'veladas temáticas'
  },
    "летние вечеринки": {
    en: 'summer parties',
    es: 'fiestas de verano'
  },"средиземноморские ужины": {
    en: 'mediterranean dinners',
    es: 'cenas mediterráneas'
  },"семейные праздники": {
    en: 'family celebrations',
    es: 'celebraciones familiares'
  },
    "восточные праздники": {
    en: 'eastern holidays',
    es: 'fiestas orientales'
  },"тематические ужины": {
    en: 'themed dinners',
    es: 'cenas temáticas'
  },'свадьбы': {
    en: 'weddings',
    es: 'bodas'
  },
      "русские праздники": {
    en: 'russian holidays',
    es: 'fiestas rusas'
  },"семейные обеды": {
    en: 'family lunches',
    es: 'almuerzos familiares'
  },"фольклорные вечера": {
    en: 'folklore evenings',
    es: 'veladas folclóricas'
  },
      "масленица": {
    en: 'maslenitsa',
    es: 'maslenitsa'
  },"бизнес ланчи": {
    en: 'business lunches',
    es: 'almuerzos de negocios'
  },"романтические ужины": {
    en: 'romantic dinners',
    es: 'cenas románticas'
  },
      "китайские праздники": {
    en: 'chinese holidays',
    es: 'fiestas chinas'
  },"банкеты": {
    en: 'banquets',
    es: 'banquetes'
  },"свидания": {
    en: 'dates',
    es: 'citas'
  },
    "испанские вечера": {
    en: 'spanish evenings',
    es: 'veladas españolas'
  },"тапас-вечеринки": {
    en: 'tapas parties',
    es: 'fiestas de tapas'
  },
      "фламенко шоу": {
    en: 'flamenco shows',
    es: 'espectáculos de flamenco'
  }
}
//Доп инфа о еде
export const dietaryRestrictions = [
    "вегетарианские блюда",
    "безглютеновые блюда",
    "веганские блюда",
]
export const dietaryRestrictionstranslations = {
        "вегетарианские блюда": {
    en: 'vegetarian dishes',
    es: 'platos vegetarianos'
  },
    "безглютеновые блюда": {
    en: 'gluten-free dishes',
    es: 'platos sin gluten'
  },
    "веганские блюда": {
    en: 'vegan dishes',
    es: 'platos veganos'
  },
}
//Вид кухни


export const typesCuisineRu = [
  'Грузинская' ,'Армянская' ,
 'Азербайджанская' ,
'Русская', 'Украинская' ,'Итальянская' ,
 'Французская' ,'Японская' ,
 'Китайская' , 'Испанская', 'Индийская' ]

 export const CUISINE_OPTIONS = {
'Грузинская': {
     en: 'Georgian',
    es: 'Georgiana'
   } ,
'Армянская' : {
     en: 'Armenian',
    es: 'Armenia'
   } ,
'Азербайджанская' : {
     en: 'Azerbaijani',
    es: 'Azerbaiyana'
   } ,
'Русская': {
     en: 'Russian',
    es: 'Rusa'
   } , 
'Украинская' : {
     en: 'Ukrainian',
    es: 'Ucraniana'
   } ,
  'Итальянская': {
     en: 'Italian',
    es: 'Italiana'
   } , 
 'Французская' : {
     en: 'French',
    es: 'Francesa'
   } ,
  'Японская': {
     en: 'Japanese',
    es: 'Japonesa'
   } ,
 'Китайская' : {
     en: 'Chinese',
    es: 'China'
   } , 
  'Испанская': {
     en: 'Spanish',
    es: 'Española'
   } ,
     'Индийская': {
     en: 'Indian',
    es: 'India'
   } ,
};

{/* Тип кухни */}

export const Cuisinetype = {
        "кавказская": {
    en: 'caucasian',
    es: 'caucásica'
  },
    "азиатская": {
    en: 'asian',
    es: 'asiática'
  },
    "ближневосточная": {
    en: 'middle eastern',
    es: 'medio oriente'
  },
      "латиноамериканская": {
    en: 'Latin American',
    es: 'latinoamericano'
  },
      "европейская": {
    en: 'european',
    es: 'europea'
  } 
}

export const CuisinetypeRu = [
  'кавказская', 'азиатская','ближневосточная', 'латиноамериканская', 'европейская'
]


// defaaultvalues для translatable

 //Zod типизация

 const translat= z.object({
    
                city: z.string().min(2, 'Введите название города'),
                name: z.string().min(2, 'Введите название ресторана'),
                address: z.string().min(2, 'Введите адрес ресторана'),
                cuisines:z.array(z.string()).min(1, {
    message: 'Выберите хотя бы один вариант'
  }),
                services:z.array(z.string()),
                description: z.string().max(150, 'Описание не должно превышать 150 символов').nullable(),
                type_cuisine: z.string().min(1, {
    message: 'Выберите хотя бы один вариант'
  }),
                special_occasion: z.array(z.string()).min(1, {
    message: 'Выберите хотя бы один вариант'
  }),
                dietary_restrictions:z.array(z.string())
            
 })

 const buinessHours =z.object({
  "friday": z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "monday":  z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "sunday":  z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "tuesday":  z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "saturday":  z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "thursday": z.object({
    "open": z.string(),
    "close": z.string()
  }) ,
  "wednesday":  z.object({
    "open": z.string(),
    "close": z.string()
  }) 
}) 

 export const restaurantSchema = z.object({
   email: z.email('Некоректный email'),
        phone_number: z.string().min(5, 'Слишком короткий номер'),
         average_rating: z.number(),
        price_range: z.number().min(0, 'Не может быть 0'),
        capacity: z.number().min(1, 'Не может быть 0'),
         business_hours: buinessHours.nullable(),
        parking:  z.boolean(),
        wifi:  z.boolean(),
        kids_room: z.boolean(),
        translatable: z.object({
          en:translat,
          ru:translat,
          es:translat
        })
 })
 export type RestaurantFormData = z.infer<typeof restaurantSchema>

 export const menuSchema = z.object({
  items: z.array(
    z.object({
       id: z.number().optional(),
  name: z.object({
    en: z.string(),
    es: z.string(),
    ru: z.string(),
  }),
  price: z.number().min(0, 'Цена длжна быть выше 0'),
  category: z.string(),
  description:z.object(
{
    en:z.string(),
    es:z.string(),
    ru:z.string(),
  })

    })
  )
   
  
 })

  export type menuSchemaFormData = z.infer<typeof menuSchema>



  export const categoryItems = ['hot', 'drinks','cold','salads','desserts']