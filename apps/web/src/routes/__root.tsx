import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Sidebar } from '@web/components/site-sidebar'
import { Topbar } from '@web/components/site-topbar'

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
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  )
})
