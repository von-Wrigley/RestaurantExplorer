import z from 'zod';

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(5, 'Минимум 5 символов')
      .regex(/[A-Z]/, 'Должна быть хотя бы одна заглавная буква')
      .regex(/[0-9]/, 'Должна быть хотя бы одна цифра'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const udatePassword = async (prevstate: any, formData: FormData) => {
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  const validdatedForm = passwordSchema.safeParse({
    password,
    confirmPassword,
  });

  if (!validdatedForm.success) {
    const flattenedErr = z.flattenError(validdatedForm.error).fieldErrors;
    return {
      success: false,
      errors: flattenedErr,
    };
  }
};
export default udatePassword;
