import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/emitters/')({
  component: () => <div>Hello /emitters/!</div>
})
