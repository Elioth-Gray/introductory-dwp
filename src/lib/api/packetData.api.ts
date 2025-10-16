import axios from 'axios';
import type { ActionResult } from '../../types';
import { API_URL } from '../../constant';
import type { PacketData } from '../../types/packetData.type';

interface getAllPacketDataParams {
  limit?: number;
  operator?: string;
}

export const getAllPacketData = async ({
  limit = 4,
  operator,
}: getAllPacketDataParams): Promise<ActionResult<PacketData[]>> => {
  try {
    const result = await axios.get<PacketData[]>(
      `${API_URL}/packetdata?operator=${operator || ''}&_limit=${limit || 0}`,
    );

    if (result.status !== 200) {
      return { success: false, message: 'Gagal mengambil data paket data' };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error in packet data:', error);
    return { success: false, message: 'Gagal terhubung ke server' };
  }
};
