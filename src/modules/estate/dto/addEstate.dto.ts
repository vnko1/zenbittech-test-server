import { z } from 'zod';

export const addEstateSchema = z.object({
  title: z.string({ required_error: 'Title is required' }),
  imageUrl: z.string({ required_error: 'Image is required' }),
  price: z
    .number({
      invalid_type_error: 'Price must be a number',
    })
    .nonnegative()
    .optional(),
  tiket: z
    .number({
      invalid_type_error: 'Tiket must be a number',
    })
    .nonnegative()
    .optional(),
  yield: z
    .number({
      invalid_type_error: 'Yield must be a number',
    })
    .nonnegative()
    .optional(),
  days: z
    .number({
      invalid_type_error: 'Days must be a number',
    })
    .nonnegative()
    .optional(),
  sold: z
    .number({
      invalid_type_error: 'Sold must be a number',
    })
    .nonnegative()
    .optional(),
});

export type AddEstateDto = z.infer<typeof addEstateSchema>;
