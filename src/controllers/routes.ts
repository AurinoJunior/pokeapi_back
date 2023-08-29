import { app } from '../app'
import { abilities } from './abilities'

export async function appRoutes() {
  app.get('/pokemon/:name/abilities', abilities)
}
