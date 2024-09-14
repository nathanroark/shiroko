import { createLazyFileRoute } from '@tanstack/react-router'
import { api } from '@libs'
import { useQuery } from '@tanstack/react-query'

export const Route = createLazyFileRoute('/skadi/')({
  component: Skadi
})

function Skadi() {
  // Using the useQuery hook to fetch data
  const { data, error, isLoading } = useQuery({
    queryKey: ['skadi'],
    queryFn: async () => {
      const response = await api.nendoroid.skadi.get()
      return response.data
    }
  })

  // Handle loading state
  if (isLoading) return <h1>Loading...</h1>

  // Handle error state
  if (error) return <h1>Something went bad</h1>

  // Destructure the data if available
  if (!data) return null // safeguard for null data
  const { id, name, cover, type, license } = data

  return (
    <div className="flex justify-center items-center w-full bg-background pt-12">
      <div className="flex gap-6 max-w-xs mx-auto">
        <header className="flex flex-col justify-between">
          <div className="flex flex-col items-end gap-1">
            <small className="text-secondary-foreground text-sm font-light">
              Nendoroid: {id}
            </small>
            <h1 className="text-5xl text-accent-foreground">{name}</h1>
          </div>
          <div className="relative">
            <p className="text-right text-secondary-foreground font-light">
              {license.from}
            </p>
            <h4 className="text-[24em] absolute bottom-[-6rem] left-[-18rem] font-semibold pointer-events-none text-muted-foreground">
              {id}
            </h4>
          </div>
        </header>
        <img
          src={cover}
          alt={`${name} ${type}`}
          className="z-10 rounded-2xl drop-shadow-2xl object-fit object-contain"
        />
      </div>
    </div>
  )
}
