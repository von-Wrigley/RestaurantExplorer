'use server';

import { createClient } from '../../../supabase/server';
import { adminCheckResSchema } from '../../static/res';

async function ActionToAdmin(previousState: unknown, formData: FormData) {
  const supabase = await createClient();
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
  };
  const dataValidation = await adminCheckResSchema.safeParseAsync(rawData);

  if (!dataValidation.success) {
    return {
      success: false,
      message: 'Неккоректные данные',
    };
  } else {
    const { error } = await supabase.from('res_applications').insert([
      {
        res_email: dataValidation.data.email,
        status: 'pending',
        name: dataValidation.data.name,
      },
    ]);

    if (error?.code === '23505') {
      return {
        success: false,
        message: 'Email already exists',
      };
    }
  }
}

export default ActionToAdmin;
