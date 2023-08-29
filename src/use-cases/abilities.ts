import { type TAbilities } from '../@types/pokemon'

export class AbilitiesUseCase {
  async execute(abilities: TAbilities) {
    const sortAbilities = abilities.map((item) => item.ability.name).sort()
    if (sortAbilities.length === 0) return null

    return sortAbilities
  }
}
