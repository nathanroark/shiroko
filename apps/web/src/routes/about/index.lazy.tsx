import { createLazyFileRoute } from '@tanstack/react-router'
import { api } from '@libs'
import { useQuery } from '@tanstack/react-query'

export const Route = createLazyFileRoute('/about/')({
  component: About
})

function About() {
  // Using the useQuery hook to fetch data
  const { data, error, isLoading } = useQuery({
    queryKey: ['shiroko'],
    queryFn: async () => {
      const response = await api.anime.shiroko.get()
      return response.data
    }
  })

  // Handle loading state
  if (isLoading) return <h1>Loading...</h1>

  // Handle error state
  if (error) return <h1>Something went bad</h1>

  // Destructure the data if available
  if (!data) return null // safeguard for null data
  const { id, name, series, picture, developer } = data

  return (
    <div className="flex justify-center items-center w-full pt-12 bg-background">
      <div className="flex gap-6 max-w-sm">
        <header className="flex flex-col justify-between">
          <div className="flex flex-col gap-1 m-auto">
            <small className="text-secondary-foreground text-sm font-light tracking-widest">
              {series}: {id}
            </small>
            <h1 className="text-[2rem] font-mono text-accent-foreground">
              {name}
            </h1>
          </div>
          <div className="relative">
            <p className="text-right text-secondary-foreground font-light">
              {developer}
            </p>
            <h4 className="text-[24em] absolute bottom-[-6rem] left-[-18rem] font-semibold pointer-events-none text-muted-foreground">
              {id}
            </h4>
          </div>
        </header>
        <img
          src={picture}
          alt={`${name} ${series}`}
          className="z-10 rounded-2xl drop-shadow-2xl object-contain"
        />
      </div>
    </div>
  )
}
