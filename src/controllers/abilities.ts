import { AxiosError } from 'axios'
import { z } from 'zod'

import { type FastifyReply, type FastifyRequest } from 'fastify'
import { type IPokemonRequestApi } from '../@types/pokemon'

import { axiosInstance } from '../lib/axios'
import { AbilitiesUseCase } from '../use-cases/abilities'
import { InvalidPokemonError } from './error/invalid-pokemon'

export async function abilities(request: FastifyRequest, reply: FastifyReply) {
  const abilitiesParamSchema = z.object({
    name: z.string(),
  })

  const { name } = abilitiesParamSchema.parse(request.params)

  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) throw new InvalidPokemonError()
    }

    throw error
  }
}
