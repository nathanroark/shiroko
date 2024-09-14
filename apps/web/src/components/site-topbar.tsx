'use client'

import { Link } from '@tanstack/react-router'
import { ThemeSelect } from './theme-select'
import { Grip } from '@ui/icons'

export function Topbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-black h-12">
      <div className="flex h-12 items-center px-1 gap-3">
        <Link to="/">
          <div className="size-10 items-center flex justify-center hover:bg-muted p-2.5 text-muted-foreground">
            <Grip />
          </div>
        </Link>
        <Link
          to="/"
          className="space-x-2 text-white items-center flex justify-center"
        >
          <span className="text-md text-blue-400 tracking-wide">Shiroko</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2 pr-4">
          <ThemeSelect />
        </div>
      </div>
    </header>
  )
}
