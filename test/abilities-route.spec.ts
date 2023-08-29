import { it, afterAll, beforeAll, expect, describe } from 'vitest'
import supertest from 'supertest'

import { app } from '../src/app'

describe('/abilities', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return 200 when accessing healthcheck', async () => {
    const response = await supertest(app.server).get('/healthcheck')

    expect(response.status).toEqual(200)
  })

  it('should return 200 when fetching a pokemon abilities', async () => {
    const response = await supertest(app.server).get(
      '/pokemon/pikachu/abilities'
    )

    expect(response.status).toEqual(200)
  })
})
