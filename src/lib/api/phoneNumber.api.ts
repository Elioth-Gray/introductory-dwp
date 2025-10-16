import axios from 'axios';
import type { ActionResult } from '../../types';
import { API_URL } from '../../constant';
import type { PhoneNumber } from '../../types/phoneNumber.type';

interface getAllPhoneNumberDetailParams {
  phoneNumber?: string;
  operator?: string;
}

export const getPhoneNumberDetail = async ({
  phoneNumber,
}: getAllPhoneNumberDetailParams): Promise<ActionResult<PhoneNumber>> => {
  try {
    const result = await axios.get<PhoneNumber[]>(
      `${API_URL}/phonenumber?phonenumber=${phoneNumber || ''}`,
    );

    if (result.status !== 200) {
      return { success: false, message: 'Gagal mengambil data nomor telepon' };
    }

    const phoneNumberDetail = result.data.length > 0 ? result.data[0] : null;

    if (!phoneNumberDetail) {
      return { success: false, message: 'Nomor telepon tidak ditemukan' };
    }

    return { success: true, data: phoneNumberDetail };
  } catch (error) {
    console.error('Error in phone number API:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
};
