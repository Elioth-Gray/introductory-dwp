import axios from 'axios';
import type { ActionResult } from '../../types';
import { API_URL } from '../../constant';
import type { PurchaseHistory } from '../../types/purchaseHistory.type';

interface GetPurchaseHistoryParams {
  userId?: number;
  page?: number;
  limit?: number;
  operator?: string;
  status?: string;
  type?: string;
}

export const getPurchaseHistory = async (
  params?: GetPurchaseHistoryParams,
): Promise<ActionResult<PurchaseHistory[]>> => {
  try {
    const searchParams = new URLSearchParams();

    if (params?.page) {
      searchParams.append('_page', params.page.toString());
    }
    if (params?.limit) {
      searchParams.append('_limit', params.limit.toString());
    }

    if (params?.userId) {
      searchParams.append('userId', params.userId.toString());
    }
    if (params?.operator && params.operator !== 'all') {
      searchParams.append('operator', params.operator);
    }
    if (params?.status && params.status !== 'all') {
      searchParams.append('status', params.status);
    }
    if (params?.type && params.type !== 'all') {
      searchParams.append('type', params.type);
    }

    const url = `${API_URL}/purchase_history${
      searchParams.toString() ? `?${searchParams.toString()}` : ''
    }`;
    const result = await axios.get<PurchaseHistory[]>(url);

    if (result.status !== 200) {
      return {
        success: false,
        message: 'Gagal mengambil data riwayat pembelian',
      };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error in purchase history:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
};
