'use client'

import { Link } from '@tanstack/react-router'
import { cn } from '@ui/libs'
import { Logo } from '@ui/icons'

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className=" mr-4 flex items-center space-x-2 lg:mr-6">
        <Logo className="size-5 opacity-90" />
        <span className="hidden text-lg font-bold md:inline-block">Chiaki</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          to="/about"
          className={cn('transition-colors hover:text-foreground/80')}
          activeProps={{
            className: 'font-bold'
          }}
          activeOptions={{ exact: true }}
        >
          About
        </Link>
      </nav>
    </div>
  )
}
