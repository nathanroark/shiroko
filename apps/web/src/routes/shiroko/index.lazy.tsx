import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shiroko/')({
  component: () => <div>Hello /shiroko/!</div>,
})
