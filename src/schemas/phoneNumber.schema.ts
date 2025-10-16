import { z } from 'zod';

export const phoneNumberSchema = z.object({
  phoneNumber: z.string().optional(),
});

export type PhoneNumberSchema = z.infer<typeof phoneNumberSchema>;
