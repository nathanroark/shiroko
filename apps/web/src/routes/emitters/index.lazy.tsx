import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/emitters/')({
  component: Emitters
})

function Emitters() {
  return (
    <div className="container flex justify-center">
      <h1>Emitters Page</h1>
    </div>
  )
}
