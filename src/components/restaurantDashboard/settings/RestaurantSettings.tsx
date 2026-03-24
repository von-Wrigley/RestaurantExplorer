'use client';

import { useState } from 'react';
import { createClient } from '../../../../supabase/supabase-client';
import z from 'zod';

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(5, 'Минимум 5 символов')
      .max(10, 'Максимум 10 символов')
      .regex(/[A-Z]/, 'Должна быть хотя бы одна заглавная буква')
      .regex(/[0-9]/, 'Должна быть хотя бы одна цифра'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  });

function RestaurantSettings() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{
    password?: string[];
    confirmPassword?: string[];
  }>({});

  const [loading, setLoading] = useState(false);

  const udatePassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Начало');
    const validdatedForm = passwordSchema.safeParse(formData);
    if (!validdatedForm.success) {
      console.log('3. Валидация не прошла');
      const flattenedErr = z.flattenError(validdatedForm.error).fieldErrors;
      setErrors(flattenedErr);
      setLoading(false);
      return;
    }

    try {
      console.log('5. Перед createClient');
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({ password: validdatedForm.data.password });
      console.log(validdatedForm.data.password);
      console.log('sdffffffffffffffffffffffffffffffffffffffff');
      if (error) {
        console.log('Error updating password:', error.message);
      } else {
        console.log('Пароль успешно обновлен');
        setFormData({ password: '', confirmPassword: '' });
        setErrors({});
      }
    } catch (error) {
      console.log('Ошибка в обновлении пароля ресторана: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Установить пароль</h3>

      <div>
        <form onSubmit={udatePassword}>
          <div>
            <label>Устанвите новый пароль</label>

            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />

            {errors.password?.map((error, index) => (
              <div key={index} className="error">
                {error}
              </div>
            ))}
          </div>

          <div>
            <label>Подтвердите новый пароль</label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />

            {errors.confirmPassword?.map((error, index) => (
              <div key={index} className="error">
                {error}
              </div>
            ))}
          </div>
          <button type="submit">{loading ? 'Подождите' : 'Отправить'}</button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantSettings;
