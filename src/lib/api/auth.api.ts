import axios from 'axios';
import type { AuthSchema } from '../../schemas/auth.schema';
import type { ActionResult } from '../../types';
import type { User } from '../../types/auth.type';
import { useAuthStore } from '../../store/auth.store';
import { API_URL } from '../../constant';

export const loginAction = async (data: AuthSchema): Promise<ActionResult> => {
  try {
    const result = await axios.get<User[]>(`${API_URL}/users`);

    const user = result.data.find((user: User) => user.email === data.email);

    if (!user) {
      return { success: false, message: 'Kredensial tidak valid!' };
    }

    if (user.password !== data.password) {
      return { success: false, message: 'Kredensial tidak valid!' };
    }

    useAuthStore.getState().setAuth(Number(user.id), user.email, user.username);

    return {
      success: true,
      message: 'Login berhasil',
    };
  } catch (error) {
    console.error('Error in auth:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
};
