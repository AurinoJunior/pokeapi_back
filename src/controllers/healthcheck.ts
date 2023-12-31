import { type FastifyReply, type FastifyRequest } from 'fastify'

export async function healthcheck(_: FastifyRequest, reply: FastifyReply) {
  return await reply.status(200).send({
    message: 'ok',
  })
}
