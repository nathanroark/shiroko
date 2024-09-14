import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/mission-builder/')({
  component: MissionBuilder
})

function MissionBuilder() {
  return (
    <div className="container flex justify-center">
      <h1>Mission Builder Page</h1>
    </div>
  )
}
