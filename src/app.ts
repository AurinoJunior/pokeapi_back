import fastify, { type FastifyError } from 'fastify'
import { ZodError } from 'zod'
import { type AxiosError } from 'axios'

import { appRoutes } from './controllers/routes'
import { InvalidPokemonError } from './controllers/error/invalid-pokemon'

export const app = fastify()

type TCustomErrorType = AxiosError & FastifyError

app.register(appRoutes)
app.setErrorHandler((error: TCustomErrorType, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (error instanceof InvalidPokemonError) {
    return reply.status(404).send({ message: error.message })
  }

  return reply
    .status(500)
    .send({ message: 'Internal server error', error: error.message })
})
