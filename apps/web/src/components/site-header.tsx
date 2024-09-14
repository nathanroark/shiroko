import { MainNav } from '@web/components/main-nav'
// import { MobileNav } from '@web/components/mobile-nav'
import { ThemeSelect } from './theme-select'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeSelect />
        </div>
      </div>
    </header>
  )
}
