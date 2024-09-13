import { spawn } from 'child_process'
import killPort from 'kill-port'

const commands = [
  `bombardier --fasthttp -c 500 -d 10s http://127.0.0.1:3001/tracks/locations`,
  `bombardier --fasthttp -c 500 -d 10s -m POST -H 'Content-Type:application/json' -b '{"name":"Test Location","latitude":47.6062,"longitude":-122.3321}' http://127.0.0.1:3001/tracks/locations`
]

const startServer = () => {
  // TODO: Give this an actual server command or use ENV var
  const server = spawn('bun', ['run', 'server.ts'], {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  })

  server.on('error', (error) => {
    console.error('Failed to start the server:', error)
  })

  server.on('close', (code) => {
    console.log(`Server process exited with code ${code}`)
  })

  return () => {
    server.kill()
  }
}

const runBenchmark = async () => {
  const killServer = startServer()

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
  } finally {
    // Kill the server after the test
    killServer()
    await killPort(3001)
  }
}

const waitForServer = async () => {
  let attempts = 0
  while (attempts < 10) {
    try {
      const response = await fetch('http://127.0.0.1:3001/tracks/locations')
      if (response.ok) {
        console.log('Server is ready')
        return
      }
    } catch (error) {}
    attempts++
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Wait for 1 second
  }
  throw new Error('Server did not become ready in time')
}

// Run the benchmark
runBenchmark()
