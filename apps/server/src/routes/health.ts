import { Elysia } from 'elysia'

export const healthRoutes = new Elysia().group('/health', (app) =>
  app.get('/health', 'ok')
)
