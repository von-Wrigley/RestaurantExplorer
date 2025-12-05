import { resServicesRu, serviceTranslations } from "@/static/res"
import { Controller } from "react-hook-form"




function Services({control, setValue}) {

    const handleServiceTranslations = (selectedServices)=> {
           const transEn = selectedServices.map(serv=>serviceTranslations[serv].en )
           const transEs = selectedServices.map(serv=>serviceTranslations[serv].es )

           setValue('translatable.ru.services', selectedServices)
           setValue('translatable.en.services', transEn)
           setValue('translatable.es.services', transEs)
    }
  return (
    <div className="bg-gray-300  ring shadow-xl ring-gray-900/5 p-3  rounded-lg h-fit">
        <h3>Услуги, предоставляемые рестораном</h3>
         <Controller
        control={control}
        name="translatable.ru.services"
        render={({ field }) => (
          <div className="flex flex-col"> 
            {resServicesRu.map(serv=> (
                 <label key={serv} className="flex gap-x-1 flex-row">
                    <input type="checkbox"  checked={field.value.includes(serv)} onChange={(e)=>{
                        
                        let selectedServices=[]

                        if(e.target.checked){
                                  selectedServices= [...field.value, serv]
                        }else{
                                   selectedServices= field.value.filter((x)=> x !==serv)
                        }
                        handleServiceTranslations(selectedServices)
                    }} />
                    {serv}
                    </label>
            ))}
          </div>
        
        )}
      />
      
    </div>
  )
}

export default Services
