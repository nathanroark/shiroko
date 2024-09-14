import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SiteHeader } from '@web/components/site-header'

export const Route = createRootRoute({
  component: () => (
    <div className="bg-background text-foreground h-screen">
      {/* <div className="p-2 flex gap-2"> */}
      {/*   <Link to="/" className="[&.active]:font-bold"> */}
      {/*     Home */}
      {/*   </Link>{' '} */}
      {/*   <Link to="/about" className="[&.active]:font-bold"> */}
      {/*     About */}
      {/*   </Link> */}
      {/* </div> */}
      <SiteHeader />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
})
