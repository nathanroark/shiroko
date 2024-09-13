import { Elysia, t } from 'elysia'

export const authRoutes = new Elysia().group('/auth', (app) =>
  app.post('/sign-in', ({ body }: any) => body, {
    body: t.Object({
      username: t.String(),
      password: t.String()
    }),
    response: {
      200: t.Object({
        username: t.String(),
        password: t.String()
      }),
      400: t.Object({
        error: t.String(),
        status: t.Number()
      })
    }
  })
)
