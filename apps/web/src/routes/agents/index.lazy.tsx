import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/agents/')({
  component: Agents
})

function Agents() {
  return (
    <div className="container flex justify-center">
      <h1>Agents Page</h1>
    </div>
  )
}
