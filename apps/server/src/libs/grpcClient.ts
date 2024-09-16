import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { EventEmitter } from 'events'

// Load the protobuf
const PROTO_PATH = './path_to_your_proto_file.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const grpcObject = grpc.loadPackageDefinition(packageDefinition)
const yourService = grpcObject.yourServiceName as any

// Create a gRPC client
const client = new yourService.YourServiceName(
  'localhost:50051',
  grpc.credentials.createInsecure()
)

// EventEmitter to handle incoming messages
class GrpcClient extends EventEmitter {
  constructor() {
    super()
    this.listenForMessages()
  }

  listenForMessages() {
    const call = client.yourRpcMethodName({})

    call.on('data', (message: any) => {
      this.emit('message', message)
    })

    call.on('end', () => {
      console.log('gRPC stream ended.')
    })

    call.on('error', (error: any) => {
      console.error('gRPC error:', error)
    })

    call.on('status', (status: any) => {
      console.log('gRPC status:', status)
    })
  }
}

export const grpcClient = new GrpcClient()
