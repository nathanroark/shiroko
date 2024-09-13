import { Elysia } from 'elysia'

export const nendoroidRoutes = new Elysia().group('/nendoroid', (app) =>
  app.get('/skadi', () => ({
    id: 1895,
    name: 'Skadi',
    type: 'Nendoroid',
    manufacture: 'Goodsmile',
    cover: `http://localhost:3001/assets/skadi.jpg`,
    license: {
      type: 'approved',
      holder: 'Hypergraph',
      from: 'Arknights'
    }
  }))
)
