import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'
import { healthRoutes } from '@server/routes/health'
import { nendoroidRoutes } from '@server/routes/nendoroid'
import { authRoutes } from '@server/routes/auth'
import { trackRoutes } from '@server/routes/tracks'

export const app = new Elysia()
  .use(healthRoutes)
  .use(nendoroidRoutes)
  .use(authRoutes)
  .use(trackRoutes)
  .get('/', 'ok')
  .use(
    staticPlugin({
      prefix: ''
    })
  )
  .get('/', () => 'Hello Elysia')
  .listen(process.env.PORT ?? 3001) // use given port or 3001

// weird syntax i though was cool so i kept
if (process.env.NODE_ENV !== 'production')
  app.use(import('@server/libs/swagger'))

export type app = typeof app

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
