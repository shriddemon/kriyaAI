import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PhoneCallIcon, SaveIcon } from "lucide-react"

export default function SettingsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          </div>
          <Tabs defaultValue="general" className="space-y-4">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="voice">Voice Assistant</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                  <CardDescription>Update your company details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input id="company-name" defaultValue="Acme Corporation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue="https://acmecorp.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" defaultValue="contact@acmecorp.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" defaultValue="123 Business Ave, Suite 100, San Francisco, CA 94107" />
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <SaveIcon className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your system preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="america-los_angeles">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-los_angeles">America/Los Angeles (PST/PDT)</SelectItem>
                        <SelectItem value="america-new_york">America/New York (EST/EDT)</SelectItem>
                        <SelectItem value="europe-london">Europe/London (GMT/BST)</SelectItem>
                        <SelectItem value="asia-tokyo">Asia/Tokyo (JST)</SelectItem>
                        <SelectItem value="australia-sydney">Australia/Sydney (AEST/AEDT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="mm-dd-yyyy">
                      <SelectTrigger id="date-format">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable dark mode for the interface</p>
                    </div>
                    <Switch id="dark-mode" />
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
                  <CardTitle>AI Voice Assistant Settings</CardTitle>
                  <CardDescription>Configure your AI voice assistant behavior and preferences</CardDescription>
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
                    <Label htmlFor="greeting-message">Greeting Message</Label>
                    <Textarea
                      id="greeting-message"
                      defaultValue="Hello, this is Kriya AI. How may I assist you today?"
                      placeholder="Enter the greeting message for inbound calls"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="call-recording">Call Recording</Label>
                      <p className="text-sm text-muted-foreground">Record all AI voice assistant calls</p>
                    </div>
                    <Switch id="call-recording" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="call-transcription">Call Transcription</Label>
                      <p className="text-sm text-muted-foreground">Generate text transcripts for all calls</p>
                    </div>
                    <Switch id="call-transcription" defaultChecked />
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <SaveIcon className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Call Flow Configuration</CardTitle>
                  <CardDescription>Set up automated call flows and scripts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="call-script">Default Call Script</Label>
                    <Textarea
                      id="call-script"
                      className="min-h-[150px]"
                      defaultValue="Hello, this is Kriya AI. I'm calling to follow up on your recent inquiry about our services. Would you like to schedule a consultation with one of our specialists?"
                      placeholder="Enter the default script for outbound calls"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="follow-up-days">Follow-up Schedule</Label>
                    <Select defaultValue="3">
                      <SelectTrigger id="follow-up-days">
                        <SelectValue placeholder="Select follow-up days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 day after initial contact</SelectItem>
                        <SelectItem value="3">3 days after initial contact</SelectItem>
                        <SelectItem value="7">7 days after initial contact</SelectItem>
                        <SelectItem value="14">14 days after initial contact</SelectItem>
                        <SelectItem value="30">30 days after initial contact</SelectItem>
                      </SelectContent>
                    </Select>
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
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Configure how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>New Lead Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications when new leads are added</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Call Completion Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when AI completes a call</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Appointment Confirmations</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts for new appointments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>System Updates</Label>
                      <p className="text-sm text-muted-foreground">Get notified about system updates and maintenance</p>
                    </div>
                    <Switch />
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
            <TabsContent value="team" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>Manage team members and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Team management interface will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="billing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>Manage your subscription and payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Billing and subscription interface will appear here</p>
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
