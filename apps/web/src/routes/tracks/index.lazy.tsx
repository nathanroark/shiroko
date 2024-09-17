'use server'
import { createLazyFileRoute } from '@tanstack/react-router'
import { api } from '@libs'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@ui/libs'

export const Route = createLazyFileRoute('/tracks/')({
  component: Tracks
})

function Tracks() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['tracks-list'],
    queryFn: async () => {
      const response = await api.tracks.locations.get()
      return response.data
    },
    refetchInterval: 1000
  })

  if (isLoading) return <></> // TODO: Add a loading spinner
  if (error) return <div>Something went wrong...</div>
  if (!data) return <div>Nothing to see here...</div>

  return (
    <div className="flex justify-center items-center w-full pt-12">
      <div className="flex flex-col gap-6 w-full px-32">
        <header className="flex flex-col justify-between">
          <div className="flex flex-col gap-1 m-auto">
            <h1 className="text-[2rem] font-mono text-accent-foreground underline-offset-2 underline">
              Tracks
            </h1>
          </div>
        </header>
        <div className="w-full">
          {data.map((track, idx) => (
            <div
              key={track.id}
              className={cn(idx % 2 === 0 ? 'bg-muted/50' : '')}
            >
              <p
                className={cn(
                  track.color === 'red' && 'text-red-500',
                  'py-1 items-center'
                )}
              >
                {track.name} {track.latitude} - {track.longitude}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
