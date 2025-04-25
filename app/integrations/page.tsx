import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhoneCallIcon, ServerIcon, DatabaseIcon, MessageSquareIcon, GlobeIcon, PlusIcon } from "lucide-react"

const integrations = [
  {
    id: 1,
    name: "Salesforce CRM",
    description: "Connect your Salesforce account to sync leads and contacts",
    status: "Connected",
    icon: <DatabaseIcon className="h-8 w-8" />,
    lastSync: "Today at 10:30 AM",
  },
  {
    id: 2,
    name: "HubSpot",
    description: "Integrate with HubSpot for marketing automation",
    status: "Not Connected",
    icon: <GlobeIcon className="h-8 w-8" />,
    lastSync: null,
  },
  {
    id: 3,
    name: "Twilio",
    description: "Voice and SMS capabilities for outbound communications",
    status: "Connected",
    icon: <PhoneCallIcon className="h-8 w-8" />,
    lastSync: "Today at 9:15 AM",
  },
  {
    id: 4,
    name: "Zendesk",
    description: "Customer support ticket integration",
    status: "Not Connected",
    icon: <MessageSquareIcon className="h-8 w-8" />,
    lastSync: null,
  },
  {
    id: 5,
    name: "Google Calendar",
    description: "Sync appointments and schedule meetings",
    status: "Connected",
    icon: <ServerIcon className="h-8 w-8" />,
    lastSync: "Yesterday at 4:45 PM",
  },
  {
    id: 6,
    name: "Mailchimp",
    description: "Email marketing campaign integration",
    status: "Not Connected",
    icon: <MessageSquareIcon className="h-8 w-8" />,
    lastSync: null,
  },
]

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <PhoneCallIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">Kriya AI</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/leads">Leads</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/calls">Calls</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/integrations">Integrations</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/settings">Settings</a>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Integration
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <Card key={integration.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-muted p-2">{integration.icon}</div>
                  <div>
                    <CardTitle>{integration.name}</CardTitle>
                    <CardDescription>{integration.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant={integration.status === "Connected" ? "outline" : "secondary"}>
                      {integration.status}
                    </Badge>
                    {integration.lastSync && (
                      <span className="text-xs text-muted-foreground">Last sync: {integration.lastSync}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant={integration.status === "Connected" ? "outline" : "default"} className="w-full">
                    {integration.status === "Connected" ? "Manage" : "Connect"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
