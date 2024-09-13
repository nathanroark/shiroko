import { api } from '@libs'

export default async function Page() {
  const { data, error } = await api.nendoroid.skadi.get()

  if (error) return <h1>Something went wrong</h1>

  const { id, name, cover, type, license } = data

  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-background">
      <article className="flex gap-6 max-w-xs mx-auto">
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
      </article>
    </main>
  )
}
