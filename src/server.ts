import { app } from './app'
import { env } from './env'

app
  .listen({
    host: env.APP_HOST,
    port: env.APP_PORT,
  })
  .then(() => {
    console.log('🔥 HTTP Server Running', env.APP_PORT)
  })
