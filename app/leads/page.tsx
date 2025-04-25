import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, FilterIcon, PlusIcon, SearchIcon, PhoneCallIcon, MoreHorizontalIcon } from "lucide-react"

const leads = [
  {
    id: 1,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phone: "+1 (555) 123-4567",
    source: "Website Form",
    status: "New",
    date: "Apr 24, 2025",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    phone: "+1 (555) 234-5678",
    source: "Meta Ad",
    status: "Contacted",
    date: "Apr 24, 2025",
  },
  {
    id: 3,
    name: "David Chen",
    email: "david.c@example.com",
    phone: "+1 (555) 345-6789",
    source: "Referral",
    status: "Qualified",
    date: "Apr 23, 2025",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    phone: "+1 (555) 456-7890",
    source: "Manual Entry",
    status: "New",
    date: "Apr 22, 2025",
  },
  {
    id: 5,
    name: "Robert Smith",
    email: "robert.s@example.com",
    phone: "+1 (555) 567-8901",
    source: "Website Form",
    status: "Contacted",
    date: "Apr 22, 2025",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    phone: "+1 (555) 678-9012",
    source: "Meta Ad",
    status: "Qualified",
    date: "Apr 21, 2025",
  },
  {
    id: 7,
    name: "Thomas Brown",
    email: "thomas.b@example.com",
    phone: "+1 (555) 789-0123",
    source: "Referral",
    status: "New",
    date: "Apr 21, 2025",
  },
  {
    id: 8,
    name: "Lisa Garcia",
    email: "lisa.g@example.com",
    phone: "+1 (555) 890-1234",
    source: "Manual Entry",
    status: "Contacted",
    date: "Apr 20, 2025",
  },
]

export default function LeadsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Lead
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input placeholder="Search leads..." className="h-9" />
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
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell>{lead.email}</TableCell>
                    <TableCell>{lead.phone}</TableCell>
                    <TableCell>{lead.source}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          lead.status === "New" ? "default" : lead.status === "Contacted" ? "secondary" : "outline"
                        }
                      >
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{lead.date}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <PhoneCallIcon className="h-4 w-4" />
                          <span className="sr-only">Call</span>
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
