import {z} from 'zod'

export const taskSchema = z.object({
    title: z.string({
        required: true,
        required_error: 'Title is required'
    }),
    description: z.string({
        required: true,
        required_error: 'Description should be string'
    }),
    date: z.string().datetime().optional()
})