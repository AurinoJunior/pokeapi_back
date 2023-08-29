import { describe, it, expect, beforeEach } from 'vitest'
import { AbilitiesUseCase } from './abilities'
import { abilitiesMock } from '../mocks/abilitiesMock'

let abilitiesUseCase: AbilitiesUseCase

describe('Abilities use case', () => {
  beforeEach(() => {
    abilitiesUseCase = new AbilitiesUseCase()
  })

  it('should return the name of sorted skills', async () => {
    const pokeAbilities = await abilitiesUseCase.execute(abilitiesMock)

    expect(pokeAbilities).toEqual(['lightning-rod', 'static'])
  })

  it('should return null if the pokémon has no skills', async () => {
    const pokeAbilities = await abilitiesUseCase.execute([])

    expect(pokeAbilities).toEqual(null)
  })
})
