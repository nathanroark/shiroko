import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/skadi/')({
  component: () => <div>Hello /skadi/!</div>
})
