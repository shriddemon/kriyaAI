import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { PhoneCallIcon, SaveIcon, PlayIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function CreateVoiceAgentPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Create Voice Agent</h1>
          </div>

          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="script">Script & Training</TabsTrigger>
              <TabsTrigger value="voice">Voice & Personality</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Set up the basic details for your AI voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="agent-name">Agent Name</Label>
                    <Input id="agent-name" placeholder="e.g., Appointment Scheduler" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-description">Description</Label>
                    <Textarea
                      id="agent-description"
                      placeholder="Describe what this agent does and its primary purpose"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-goal">Primary Goal</Label>
                    <Select>
                      <SelectTrigger id="agent-goal">
                        <SelectValue placeholder="Select the primary goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="appointment">Schedule Appointments</SelectItem>
                        <SelectItem value="qualify">Qualify Leads</SelectItem>
                        <SelectItem value="follow-up">Follow Up with Leads</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="custom">Custom Goal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-category">Category</Label>
                    <Select>
                      <SelectTrigger id="agent-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="scheduling">Scheduling</SelectItem>
                        <SelectItem value="follow-up">Follow-up</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call Settings</CardTitle>
                  <CardDescription>Configure how this agent handles calls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-duration">Maximum Call Duration</Label>
                    <Select defaultValue="5">
                      <SelectTrigger id="max-duration">
                        <SelectValue placeholder="Select maximum duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 minutes</SelectItem>
                        <SelectItem value="5">5 minutes</SelectItem>
                        <SelectItem value="10">10 minutes</SelectItem>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="call-recording">Call Recording</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Record all calls made by this agent</p>
                      <Switch id="call-recording" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="call-transcription">Call Transcription</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Generate transcripts for all calls</p>
                      <Switch id="call-transcription" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="voicemail">Voicemail Detection</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Detect voicemail and leave a message</p>
                      <Switch id="voicemail" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="script" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conversation Script</CardTitle>
                  <CardDescription>Define the script and conversation flow for your AI voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="greeting">Greeting</Label>
                    <Textarea
                      id="greeting"
                      placeholder="Hello, this is [Agent Name] from Kriya AI. How are you doing today?"
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="main-script">Main Script</Label>
                    <Textarea
                      id="main-script"
                      placeholder="I'm calling to follow up on your recent inquiry about our services. Would you be interested in scheduling a consultation with one of our specialists?"
                      rows={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="objection-handling">Objection Handling</Label>
                    <Textarea
                      id="objection-handling"
                      placeholder="I understand your concern. Many of our clients initially felt the same way, but they found that our solution actually helped them save time and resources in the long run."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="closing">Closing</Label>
                    <Textarea
                      id="closing"
                      placeholder="Thank you for your time today. I've scheduled your appointment for [Date/Time]. You'll receive a confirmation email shortly. Have a great day!"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Training & Intelligence</CardTitle>
                  <CardDescription>Configure the AI model and training for your voice agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="llm-model">LLM Model</Label>
                    <Select defaultValue="gpt4o">
                      <SelectTrigger id="llm-model">
                        <SelectValue placeholder="Select LLM model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt4o">GPT-4o</SelectItem>
                        <SelectItem value="gpt4">GPT-4 Turbo</SelectItem>
                        <SelectItem value="claude3opus">Claude 3 Opus</SelectItem>
                        <SelectItem value="claude3sonnet">Claude 3 Sonnet</SelectItem>
                        <SelectItem value="llama3">Llama 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-prompt">System Prompt</Label>
                    <Textarea
                      id="system-prompt"
                      placeholder="You are an AI voice assistant for Kriya AI. Your goal is to schedule appointments with potential clients. Be friendly, professional, and helpful."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="knowledge-base">Knowledge Base</Label>
                    <div className="rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Upload documents to train your agent</p>
                        <Button variant="outline" size="sm">
                          Upload Files
                        </Button>
                      </div>
                      <div className="mt-4 text-center text-sm text-muted-foreground">No files uploaded yet</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="advanced-settings">Advanced Settings</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Enable advanced conversation capabilities</p>
                      <Switch id="advanced-settings" defaultChecked />
                    </div>
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
                      <p className="text-sm">Listen to how your agent will sound</p>
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
                  <div className="space-y-2">
                    <Label htmlFor="pitch">Pitch</Label>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Low</span>
                      <Input id="pitch" type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="flex-1" />
                      <span className="text-sm text-muted-foreground">High</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Personality & Behavior</CardTitle>
                  <CardDescription>Define how your AI voice agent interacts with callers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="personality-type">Personality Type</Label>
                    <Select defaultValue="professional">
                      <SelectTrigger id="personality-type">
                        <SelectValue placeholder="Select personality type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="empathetic">Empathetic</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conversation-style">Conversation Style</Label>
                    <Select defaultValue="balanced">
                      <SelectTrigger id="conversation-style">
                        <SelectValue placeholder="Select conversation style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="concise">Concise</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interruption-handling">Interruption Handling</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Allow agent to handle interruptions gracefully</p>
                      <Switch id="interruption-handling" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="silence-handling">Silence Handling</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Prompt caller if silence exceeds threshold</p>
                      <Switch id="silence-handling" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>CRM Integration</CardTitle>
                  <CardDescription>Connect your voice agent with your CRM system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="crm-integration">CRM System</Label>
                    <Select defaultValue="internal">
                      <SelectTrigger id="crm-integration">
                        <SelectValue placeholder="Select CRM system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internal">Kriya AI Internal CRM</SelectItem>
                        <SelectItem value="salesforce">Salesforce</SelectItem>
                        <SelectItem value="hubspot">HubSpot</SelectItem>
                        <SelectItem value="zoho">Zoho CRM</SelectItem>
                        <SelectItem value="other">Other (API)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lead-source">Lead Source</Label>
                    <Select>
                      <SelectTrigger id="lead-source">
                        <SelectValue placeholder="Select lead source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Leads</SelectItem>
                        <SelectItem value="website">Website Leads</SelectItem>
                        <SelectItem value="meta">Meta Ads</SelectItem>
                        <SelectItem value="google">Google Ads</SelectItem>
                        <SelectItem value="manual">Manual Entry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data-sync">Data Synchronization</Label>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Automatically sync call data with CRM</p>
                      <Switch id="data-sync" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Calendar & Scheduling</CardTitle>
                  <CardDescription>Connect your voice agent with calendar systems</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="calendar-integration">Calendar System</Label>
                    <Select>
                      <SelectTrigger id="calendar-integration">
                        <SelectValue placeholder="Select calendar system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Calendar</SelectItem>
                        <SelectItem value="outlook">Microsoft Outlook</SelectItem>
                        <SelectItem value="apple">Apple Calendar</SelectItem>
                        <SelectItem value="calendly">Calendly</SelectItem>
                        <SelectItem value="other">Other (API)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability Settings</Label>
                    <div className="rounded-md border p-4">
                      <p className="text-sm text-muted-foreground">
                        Configure when your agent can schedule appointments
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Configure Availability
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>External APIs</CardTitle>
                  <CardDescription>Connect your voice agent with external services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="external-apis">API Connections</Label>
                    <div className="rounded-md border p-4">
                      <p className="text-sm text-muted-foreground">
                        Connect to external APIs for additional functionality
                      </p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Add API Connection
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="webhooks">Webhooks</Label>
                    <div className="rounded-md border p-4">
                      <p className="text-sm text-muted-foreground">Configure webhooks to trigger on specific events</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Configure Webhooks
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Save as Draft</Button>
            <Button>
              <SaveIcon className="mr-2 h-4 w-4" />
              Create Voice Agent
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
