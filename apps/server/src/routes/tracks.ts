import { Elysia, t } from 'elysia'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const trackRoutes = new Elysia().group('/tracks', (app) =>
  app
    .get('/locations', async () => {
      return await prisma.location.findMany()
    })
    .post(
      '/locations',
      async ({ body }) => {
        const { name, latitude, longitude } = body
        return await prisma.location.create({
          data: {
            name,
            latitude,
            longitude
          }
        })
      },
      {
        body: t.Object({
          name: t.String(),
          latitude: t.Number(),
          longitude: t.Number()
        }),
        response: {
          200: t.Object({
            id: t.Number(),
            name: t.String(),
            latitude: t.Number(),
            longitude: t.Number()
          }),
          400: t.Object({
            error: t.String(),
            status: t.Number()
          })
        }
      }
    )
)
