'use server';
import { User } from '@supabase/supabase-js';
import { createClient } from '../../../supabase/server';


type userAtuhSuccess = {
  user: User;
  message: string;
  success: true;
  readonly id?:string;
};
type userAtuhError = {
  user?: User;
  message: string;
  success: false;
    readonly id?:string;
};

type userAuthCheck = userAtuhSuccess | userAtuhError;
export const checkauth = async (): Promise<userAuthCheck> => {
  const supabase = await createClient();
  const {
    data: { user },
    error: errorUser,
  } = await supabase.auth.getUser();
  if (errorUser) {
    return {
      message: 'пользователь не авторизован',
      success: false,
    };
  }
  if (!user) {
    return {
      message: 'пользователь не авторизован или его нет',
      success: false,
    };
  }

  return {
    user,
    success: true,
    message: 'авторизован',
  };
};
