import { app } from '../app'
import { abilities } from './abilities'
import { healthcheck } from './healthcheck'

export async function appRoutes() {
  app.get('/pokemon/:name/abilities', abilities)
  app.get('/healthcheck', healthcheck)
}
