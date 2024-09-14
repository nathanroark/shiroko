'use client'

import { Link, useLocation } from '@tanstack/react-router'
import { Bot, Radio, BookA, Wrench, Home } from '@ui/icons'
import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

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
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState(0)

  // Update the active link index based on the current path
  useEffect(() => {
    const index = links.findIndex((link) => link.slug === location.pathname)
    if (index !== -1) {
      setActiveIndex(index)
    }
  }, [location.pathname])

  const { translateY } = useSpring({
    translateY: activeIndex * 52,
    config: { tension: 210, friction: 20, clamp: true }
  })

  return (
    <header className="fixed left-0 z-20 h-full w-14 bg-white dark:bg-black">
      <nav className="flex flex-col items-center text-sm gap-2">
        <animated.div
          style={{ transform: translateY.to((y) => `translateY(${y}px)`) }}
          className="absolute left-0 w-1 h-11 bg-primary rounded-xl"
        />
        {links.map((link) => (
          <Link key={'sidebar-link-' + link.name} to={link.slug}>
            <div
              key={'sidebar-link-' + link.name}
              className="hover:bg-muted transition-all duration-200 rounded p-3"
            >
              <div className="size-5 items-center flex justify-center">
                {link.icon}
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </header>
  )
}
