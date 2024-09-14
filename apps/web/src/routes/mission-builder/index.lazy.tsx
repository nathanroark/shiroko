import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/mission-builder/')({
  component: () => <div>Hello /mission-builder/!</div>
})
