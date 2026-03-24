'use client';

import { createClient } from '../../../../../supabase/supabase-client';

function UploadImaagestoStorage({ register, id, setValue }) {
  const handlefileChange = async (e) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    const imagesAr = Array.from(selectedFiles);
    const storageName = imagesAr[0].name.slice(0, -3);
    const allURL = [];
    console.log(imagesAr[0].name);
    console.log(storageName);
    console.log(imagesAr);

    const supabase = createClient();
    for (const image of imagesAr) {
      const fullPathName = `${id}/${image?.name}`;
      const { error: erStorUpload } = await supabase.storage
        .from('resPhoto')
        .upload(fullPathName, image, {
          // cacheControl: '604800',
          upsert: false,
        });
      if (erStorUpload) {
        console.log(erStorUpload);
      }

      const { data: Iamgurl } = supabase.storage.from('resPhoto').getPublicUrl('fullPathName');

      allURL.push(Iamgurl.publicUrl);
    }
    console.log(allURL);
    setValue('images_url', allURL);
  };

  return (
    <div className="col-start-3  bg-gray-300  ring shadow-xl ring-gray-900/5 rounded-sm">
      <div className="mb-5">
        <h4 className=" pt-5 text-center ">Добавьте изображения</h4>
        <p className="  text-center ">Первое изображение будет главным</p>
      </div>

      <input
        className="bg-white w-full"
        type="file"
        accept="image/*"
        multiple
        onChange={handlefileChange}
      />
    </div>
  );
}

export default UploadImaagestoStorage;
