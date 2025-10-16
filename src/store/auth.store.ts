import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PersistOptions } from 'zustand/middleware';

type AuthState = {
  id: number | null;
  email: string | null;
  username: string | null;
  setAuth: (
    id: number | null,
    email: string | null,
    username: string | null,
  ) => void;
  clearAuth: () => void;
};

type MyPersist = PersistOptions<AuthState, AuthState>;

export const useAuthStore = create<AuthState>()(
  persist<AuthState>(
    (set) => ({
      id: null,
      email: null,
      username: null,
      setAuth: (id, email, username) => set({ id, email, username }),
      clearAuth: () => set({ id: null, email: null, username: null }),
    }),
    {
      name: 'auth-storage',
    } as MyPersist,
  ),
);
