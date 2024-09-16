import { Elysia } from 'elysia'
import { grpcClient } from '@server/libs/grpcClient'

export const websocketRoute = new Elysia().ws('/ws', {
  open: (ws) => {
    console.log('WebSocket connection opened.')

    // Listen for gRPC messages
    grpcClient.on('message', (grpcMessage) => {
      ws.send(JSON.stringify(grpcMessage))
    })
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
    console.log('WebSocket ping received.')
  }
})
