import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/agents/')({
  component: () => <div>Hello /agents/!</div>,
})
