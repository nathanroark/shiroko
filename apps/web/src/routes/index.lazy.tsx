import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader } from '@ui'
import { Bot, Radio, BookA, Wrench } from '@ui/icons'

export const Route = createLazyFileRoute('/')({
  component: Index
})

const links = [
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
    description: 'Configure and monitor emitters that agents have access to',
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
    description: 'Learn more about Shiroko',
    icon: <BookA />
  }
]

function Index() {
  return (
    <div className="container p-2">
      <div className="flex">
        <h3 className="text-4xl font-black font-mono py-8 mx-auto tracking-widest">
          Shiroko
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link) => (
          <Card
            key={'home-link-' + link.name}
            className="hover:border-primary/50 transition-colors duration-200"
          >
            <Link to={link.slug}>
              <CardContent>
                <CardHeader className="flex flex-row gap-4">
                  <div className="p-1 rounded-md bg-gradient-to-br from-primary/60 to-primary dark:from-primary dark:to-primary/60 text-white dark:text-foreground">
                    <div className="size-10 p-1 items-center flex justify-center">
                      {link.icon}
                    </div>
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
