import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  PhoneCallIcon,
  SaveIcon,
  PlayIcon,
  ArrowLeftIcon,
  BarChart3Icon,
  PhoneIncomingIcon,
  PhoneOutgoingIcon,
} from "lucide-react"
import Link from "next/link"

export default function VoiceAgentDetailPage({ params }: { params: { id: string } }) {
  // This would normally fetch the agent data based on the ID
  const agentId = Number.parseInt(params.id)

  const agent = {
    id: agentId,
    name: "Appointment Scheduler",
    description: "Books appointments and confirms scheduling details",
    status: "Active",
    calls: 1248,
    successRate: "87%",
    lastModified: "2 days ago",
    model: "GPT-4o",
    voice: "Female Voice 1",
    script: {
      greeting:
        "Hello, this is Sarah from Kriya AI. I'm calling to help you schedule an appointment with one of our specialists. How are you doing today?",
      main: "I see that you recently expressed interest in our services. I'd like to help you schedule a consultation with one of our specialists who can provide more information and answer any questions you might have.",
      objections:
        "I understand your concern. Many of our clients initially felt the same way, but they found that our consultation was very helpful in understanding how our services could benefit them.",
      closing:
        "Great! I've scheduled your appointment for [Date/Time]. You'll receive a confirmation email shortly with all the details. Is there anything else I can help you with today?",
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <PhoneCallIcon className="h-6 w-6 text-primary" />
          <span className="font-bold">Kriya AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/leads">Leads</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/calls">Calls</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/voice-agents">Voice Agents</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/integrations">Integrations</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/settings">Settings</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/voice-agents">
                <ArrowLeftIcon className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">{agent.name}</h1>
              <p className="text-muted-foreground">{agent.description}</p>
            </div>
            <Badge
              variant={agent.status === "Active" ? "default" : agent.status === "Paused" ? "secondary" : "outline"}
              className="ml-auto"
            >
              {agent.status}
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{agent.calls.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+24% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{agent.successRate}</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Call Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3:24</div>
                <p className="text-xs text-muted-foreground">-12 seconds from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="script">Script</TabsTrigger>
              <TabsTrigger value="voice">Voice</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Agent Overview</CardTitle>
                  <CardDescription>Key information about this voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium">Status</h3>
                      <p>{agent.status}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">LLM Model</h3>
                      <p>{agent.model}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Voice Type</h3>
                      <p>{agent.voice}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Last Modified</h3>
                      <p>{agent.lastModified}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium">Recent Activity</h3>
                    <div className="mt-2 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start gap-2 rounded-md border p-2">
                          <div className={`mt-0.5 rounded-full p-1 ${i % 2 === 0 ? "bg-green-100" : "bg-amber-100"}`}>
                            {i % 2 === 0 ? (
                              <PhoneOutgoingIcon className="h-3 w-3 text-green-600" />
                            ) : (
                              <PhoneIncomingIcon className="h-3 w-3 text-amber-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              Call with {i % 2 === 0 ? "Michael Johnson" : "Sarah Williams"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {i % 2 === 0 ? "Appointment scheduled" : "Information provided"} • {i} hour
                              {i !== 1 ? "s" : ""} ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common actions for this voice agent</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <PlayIcon className="mr-2 h-4 w-4" />
                      Test Call
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <BarChart3Icon className="mr-2 h-4 w-4" />
                      View Analytics
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <SaveIcon className="mr-2 h-4 w-4" />
                      Duplicate Agent
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                    <CardDescription>Key performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Appointment Rate</span>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 w-[68%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Call Completion</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 w-[92%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm">Customer Satisfaction</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-2 w-[85%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="script" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Script</CardTitle>
                  <CardDescription>Edit the script and conversation flow for your AI voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="greeting">Greeting</Label>
                    <Textarea id="greeting" defaultValue={agent.script.greeting} rows={2} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="main-script">Main Script</Label>
                    <Textarea id="main-script" defaultValue={agent.script.main} rows={5} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="objection-handling">Objection Handling</Label>
                    <Textarea id="objection-handling" defaultValue={agent.script.objections} rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="closing">Closing</Label>
                    <Textarea id="closing" defaultValue={agent.script.closing} rows={2} />
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <SaveIcon className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="voice" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Voice Configuration</CardTitle>
                  <CardDescription>Customize how your AI voice agent sounds</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="voice-type">Voice Type</Label>
                    <Select defaultValue="female-1">
                      <SelectTrigger id="voice-type">
                        <SelectValue placeholder="Select voice type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female-1">Female Voice 1</SelectItem>
                        <SelectItem value="female-2">Female Voice 2</SelectItem>
                        <SelectItem value="male-1">Male Voice 1</SelectItem>
                        <SelectItem value="male-2">Male Voice 2</SelectItem>
                        <SelectItem value="neutral">Neutral Voice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="voice-preview">Voice Preview</Label>
                    <div className="flex items-center justify-between rounded-md border p-4">
                      <p className="text-sm">Listen to how your agent sounds</p>
                      <Button variant="outline" size="sm">
                        <PlayIcon className="mr-2 h-4 w-4" />
                        Play Sample
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="speaking-rate">Speaking Rate</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Slow</span>
                      <Input
                        id="speaking-rate"
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        defaultValue="1"
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground">Fast</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <SaveIcon className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Integrations</CardTitle>
                  <CardDescription>Manage the integrations for this voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-md bg-muted p-2">
                          <PhoneCallIcon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Kriya AI CRM</p>
                          <p className="text-sm text-muted-foreground">Internal CRM integration</p>
                        </div>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-md bg-muted p-2">
                          <BarChart3Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">Google Calendar</p>
                          <p className="text-sm text-muted-foreground">Calendar integration</p>
                        </div>
                      </div>
                      <Badge variant="outline">Connected</Badge>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline">Manage Integrations</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Call Analytics</CardTitle>
                  <CardDescription>Detailed performance metrics for this voice agent</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Analytics charts will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
