'use client'

import { Link } from '@tanstack/react-router'
import { Bot, Radio, BookA, Wrench, Home } from '@ui/icons'

const links = [
  {
    slug: '/',
    name: 'Home',
    description: 'Overview of Chiaki',
    icon: <Home />
  },
  {
    slug: '/agents',
    name: 'Agents',
    description:
      'Oversee agents, track their performance, and manage their activities',
    icon: <Bot />
  },
  {
    slug: '/emitters',
    name: 'Emitters',
    description: 'Configure and monitor emitters that Chiaki has access to',
    icon: <Radio />
  },
  {
    slug: '/mission-builder',
    name: 'Mission Builder',
    description: 'Create missions for agents to execute',
    icon: <Wrench />
  },

  {
    slug: '/about',
    name: 'About',
    description: 'Learn more about Chiaki',
    icon: <BookA />
  }
]

export function Sidebar() {
  return (
    <header className="fixed left-0 z-20 h-full w-12 bg-white dark:bg-black">
      <nav className="flex flex-col items-center text-sm gap-2">
        {links.map((link) => (
          <div
            key={'sidebar-link-' + link.name}
            className="hover:bg-muted transition-all duration-200 rounded py-3 px-2"
          >
            <Link to={link.slug}>
              <div className="size-5 items-center flex justify-center">
                {link.icon}
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
