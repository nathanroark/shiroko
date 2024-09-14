import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader } from '@ui'
import { Logo } from '@ui/icons'

export const Route = createLazyFileRoute('/')({
  component: Index
})

const links = [
  {
    slug: '/mission-builder',
    name: 'Mission Builder',
    description: 'Create missions for agents to execute',
    icon: <Logo />
  },
  {
    slug: '/agents',
    name: 'Agents',
    description:
      'Oversee agents, track their performance, and manage their activities',
    icon: <Logo />
  },
  {
    slug: '/emitters',
    name: 'Emitters',
    description: 'Configure and monitor emitters that Chiaki has access to',
    icon: <Logo />
  },
  {
    slug: '/about',
    name: 'About',
    description: 'Learn more about Chiaki',
    icon: <Logo />
  },
  {
    slug: '/shiroko',
    name: 'Shiroko',
    description: 'Shiroko',
    icon: <Logo />
  },
  {
    slug: '/skadi',
    name: 'Skadi',
    description: 'Skadi',
    icon: <Logo />
  }
]
function Index() {
  return (
    <div className="container p-2">
      <div className="flex">
        <h3 className="text-4xl font-bold font-mono py-8 mx-auto">Chiaki</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <Card>
            <Link to={link.slug}>
              <CardContent>
                <CardHeader className="flex flex-row gap-4">
                  <div className="size-12 p-1 rounded-md bg-gradient-to-br from-primary to-primary/40 text-white dark:text-foreground">
                    {link.icon}
                  </div>
                  <span className="hidden text-lg font-bold md:inline-block">
                    {link.name}
                  </span>
                </CardHeader>
                <CardDescription>
                  <p>{link.description}</p>
                </CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
