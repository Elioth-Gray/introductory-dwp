import axios from 'axios';
import type { ActionResult } from '../../types';
import type { Credit } from '../../types/credit.type';
import { API_URL } from '../../constant';

interface getAllCreditsParams {
  limit?: number;
  operator?: string;
}

export const getAllCredits = async ({
  limit = 12,
  operator,
}: getAllCreditsParams): Promise<ActionResult<Credit[]>> => {
  try {
    const result = await axios.get<Credit[]>(
      `${API_URL}/credits?operator=${operator || ''}&_limit=${limit || 0}`,
    );

    if (result.status !== 200) {
      return { success: false, message: 'Gagal mengambil data pulsa' };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error in credits:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
};
