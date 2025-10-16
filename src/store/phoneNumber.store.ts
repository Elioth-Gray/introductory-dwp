import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PersistOptions } from 'zustand/middleware';

type phoneNumberState = {
  phoneNumber: string | null;
  operator: string | null;
  setPhone: (phoneNumber: string | null, operator: string | null) => void;
  clearPhone: () => void;
};

type MyPersist = PersistOptions<phoneNumberState, phoneNumberState>;

export const usePhoneNumberStore = create<phoneNumberState>()(
  persist<phoneNumberState>(
    (set) => ({
      phoneNumber: null,
      operator: null,
      setPhone: (phoneNumber, operator) => set({ phoneNumber, operator }),
      clearPhone: () => set({ phoneNumber: null, operator: null }),
    }),
    {
      name: 'phone-storage',
    } as MyPersist,
  ),
);
