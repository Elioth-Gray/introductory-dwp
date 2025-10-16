import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().min(1, 'Email harus diisi!').email('Email tidak valid!'),
  password: z
    .string()
    .min(1, 'Password harus diisi!')
    .min(6, 'Password harus setidaknya enam karakter!'),
});

export type AuthSchema = z.infer<typeof authSchema>;
