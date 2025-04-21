import { z } from "zod"

export const gigFormSchema = z.object({
  eventName: z.string()
    .min(1, { message: 'Event name is required'})
    .max(255, { message: 'Event name must be less than 255 characters.' }),
  date: z.date({ required_error: 'Date is required' }),
  venue: z.object({ id: z.string().refine(val => parseInt(val)) }, { message: 'Venue is required'}),
  lineup: z.array(z.object({ artistId: z.number()})).optional(),
  status: z.enum(['PLANNING', 'CLOSED', 'CANCELLED'])
})

export type GigFormSchema = z.infer<typeof gigFormSchema>
