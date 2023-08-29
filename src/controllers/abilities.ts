import { type FastifyReply, type FastifyRequest } from 'fastify'
import { z } from 'zod'
import { axiosInstance } from '../lib/axios'
import { type IPokemonRequestApi } from '../@types/pokemon'
import { AbilitiesUseCase } from '../use-cases/abilities'

export async function abilities(request: FastifyRequest, reply: FastifyReply) {
  const abilitiesParamSchema = z.object({
    name: z.string(),
  })

  const { name } = abilitiesParamSchema.parse(request.params)

  const { data } = await axiosInstance.get<IPokemonRequestApi>(
    `/pokemon/${name}`
  )
  const abilitiesUseCase = new AbilitiesUseCase()
  const pokeAbilities = await abilitiesUseCase.execute(data.abilities)

  return await reply.status(200).send({
    name: data.name,
    img: data.sprites.front_default,
    abilities: pokeAbilities,
  })
}
