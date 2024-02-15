import { z } from 'zod';

export const userAuthSchema = z.object({
    password: z.string().min(1, { message: 'Campo obbligatorio' }),
    confirm: z.string().min(1, { message: 'Campo obbligatorio' }),
}).refine(({ password, confirm }) => password === confirm, {
    message: 'Le password non coincidono',
    path: ['confirm']
})

export const userGeneralSchema = z.object({
    name: z.string().min(3, { message: 'Il nome è troppo breve' }).max(25, { message: 'Il nome è troppo lunga' }),
    email: z.string().email(),
    isActive: z.boolean().default(false)
})

export const userFormSchema = z.intersection(userGeneralSchema, userAuthSchema)