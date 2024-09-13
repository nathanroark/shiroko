import { spawn } from 'child_process'

const commands = [
  `$HOME/go/bin/bombardier --fasthttp -c 5000 -d 10s http://127.0.0.1:3001/tracks/locations`,
  `$HOME/go/bin/bombardier --fasthttp -c 5000 -d 10s -m POST -H 'Content-Type:application/json' -b '{"name":"Seattle","latitude":47.6062,"longitude":-122.3321}' http://127.0.0.1:3001/tracks/locations`
]

const runBenchmark = async () => {
  try {
    await waitForServer()

    for (const command of commands) {
      console.log(`Running: ${command}`)
      const result = spawn(command, { shell: true, stdio: 'inherit' })

      await new Promise<void>((resolve, reject) => {
        result.on('close', (code) => {
          if (code === 0) {
            resolve()
          } else {
            reject(new Error(`Benchmark command failed with exit code ${code}`))
          }
        })
      })
    }
  } catch (error) {
    console.error('Error during benchmarking:', error)
  }
}

// Function to check if the server is ready by making a request
const waitForServer = async () => {
  let attempts = 0
  while (attempts < 10) {
    try {
      const response = await fetch('http://127.0.0.1:3001/tracks/locations')
      if (response.ok) {
        console.log('Server is ready')
        return
      }
    } catch (error) {
      // Server not ready yet, continue to retry
    }
    attempts++
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for 1 second before retrying
  }
  throw new Error('Server did not become ready in time')
}

runBenchmark()
