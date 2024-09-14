import { Elysia } from 'elysia'

export const animeRoutes = new Elysia().group('/anime', (app) =>
  app.get('/shiroko', () => ({
    id: 1729,
    name: 'Sunaookami Shiroko',
    series: 'Blue Archive',
    developer: 'Nexon',
    picture: `http://localhost:3001/assets/shiroko.png`
  }))
)
