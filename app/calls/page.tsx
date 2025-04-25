import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DownloadIcon,
  FilterIcon,
  SearchIcon,
  PhoneCallIcon,
  PhoneIncomingIcon,
  PhoneOutgoingIcon,
  PlayIcon,
  MoreHorizontalIcon,
} from "lucide-react"

const calls = [
  {
    id: 1,
    contact: "Michael Johnson",
    phone: "+1 (555) 123-4567",
    type: "outbound",
    duration: "3:24",
    status: "Completed",
    outcome: "Appointment Set",
    date: "Apr 24, 2025",
    time: "2:30 PM",
  },
  {
    id: 2,
    contact: "Sarah Williams",
    phone: "+1 (555) 234-5678",
    type: "inbound",
    duration: "5:12",
    status: "Completed",
    outcome: "Information Provided",
    date: "Apr 24, 2025",
    time: "11:15 AM",
  },
  {
    id: 3,
    contact: "David Chen",
    phone: "+1 (555) 345-6789",
    type: "outbound",
    duration: "2:45",
    status: "Completed",
    outcome: "Follow-up Scheduled",
    date: "Apr 23, 2025",
    time: "4:45 PM",
  },
  {
    id: 4,
    contact: "Emily Rodriguez",
    phone: "+1 (555) 456-7890",
    type: "outbound",
    duration: "1:30",
    status: "No Answer",
    outcome: "Voicemail Left",
    date: "Apr 22, 2025",
    time: "10:30 AM",
  },
  {
    id: 5,
    contact: "Robert Smith",
    phone: "+1 (555) 567-8901",
    type: "inbound",
    duration: "4:15",
    status: "Completed",
    outcome: "Question Answered",
    date: "Apr 22, 2025",
    time: "3:20 PM",
  },
  {
    id: 6,
    contact: "Jennifer Lee",
    phone: "+1 (555) 678-9012",
    type: "outbound",
    duration: "2:50",
    status: "Completed",
    outcome: "Appointment Set",
    date: "Apr 21, 2025",
    time: "1:45 PM",
  },
  {
    id: 7,
    contact: "Thomas Brown",
    phone: "+1 (555) 789-0123",
    type: "outbound",
    duration: "0:45",
    status: "Busy",
    outcome: "Call Back Later",
    date: "Apr 21, 2025",
    time: "11:30 AM",
  },
  {
    id: 8,
    contact: "Lisa Garcia",
    phone: "+1 (555) 890-1234",
    type: "inbound",
    duration: "3:30",
    status: "Completed",
    outcome: "Service Inquiry",
    date: "Apr 20, 2025",
    time: "2:15 PM",
  },
]

export default function CallsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Call History</h1>
            <Button>
              <PhoneCallIcon className="mr-2 h-4 w-4" />
              New Call
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input placeholder="Search calls..." className="h-9" />
              <Button variant="outline" size="sm" className="h-9 px-3">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="h-9">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contact</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Outcome</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {calls.map((call) => (
                  <TableRow key={call.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{call.contact}</div>
                        <div className="text-xs text-muted-foreground">{call.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {call.type === "outbound" ? (
                          <>
                            <PhoneOutgoingIcon className="h-4 w-4 text-muted-foreground" />
                            <span>Outbound</span>
                          </>
                        ) : (
                          <>
                            <PhoneIncomingIcon className="h-4 w-4 text-muted-foreground" />
                            <span>Inbound</span>
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{call.duration}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          call.status === "Completed"
                            ? "outline"
                            : call.status === "No Answer"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {call.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{call.outcome}</TableCell>
                    <TableCell>
                      <div>
                        <div>{call.date}</div>
                        <div className="text-xs text-muted-foreground">{call.time}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <PlayIcon className="h-4 w-4" />
                          <span className="sr-only">Play</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontalIcon className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}
