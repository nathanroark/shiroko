import { Elysia } from 'elysia'

export const websocketRoute = new Elysia().ws('/ws', {
  open: (ws) => {
    console.log('WebSocket connection opened.')
  },
  close: (ws) => {
    console.log('WebSocket connection closed.')
    ws.close()
  },
  message: (ws, message) => {
    if (message === 'ping') {
      ws.send({ type: 'pong' })
    }
  },
  sendPings: true,
  pong: () => {
    console.log('WebSocket pong received.')
  },
  ping: () => {
    console.log('WebSocket ping recived.')
  }
})
