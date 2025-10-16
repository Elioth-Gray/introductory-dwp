export interface PurchaseHistory {
  id: number;
  userId: number;
  type: 'credit' | 'packet_data';
  title: string;
  description: string;
  amount: number | string;
  price: number;
  operator: string;
  phone_number: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  transaction_id: string;
}
