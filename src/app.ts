import fastify from 'fastify'
import { ZodError } from 'zod'

import { appRoutes } from './controllers/routes'

export const app = fastify()

app.register(appRoutes)
app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  return reply
    .status(500)
    .send({ message: 'Internal server error', error: error.message })
})