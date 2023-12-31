import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  APP_HOST: z.string().default('0.0.0.0'),
  APP_PORT: z.coerce.number().default(3333),
  BASE_API: z.string(),
})

const envValidate = envSchema.safeParse(process.env)

if (!envValidate.success) {
  console.error('❌ Invalid env variables', envValidate.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = envValidate.data
