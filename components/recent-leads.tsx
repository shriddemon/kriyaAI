import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentLeads = [
  {
    id: 1,
    name: "Michael Johnson",
    email: "michael.j@example.com",
    source: "Website Form",
    status: "New",
    time: "10 minutes ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    source: "Meta Ad",
    status: "Contacted",
    time: "25 minutes ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "David Chen",
    email: "david.c@example.com",
    source: "Referral",
    status: "Qualified",
    time: "1 hour ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    source: "Manual Entry",
    status: "New",
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function RecentLeads() {
  return (
    <div className="space-y-4">
      {recentLeads.map((lead) => (
        <div key={lead.id} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={lead.avatar || "/placeholder.svg"} alt={lead.name} />
            <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{lead.name}</p>
              <Badge
                variant={lead.status === "New" ? "default" : lead.status === "Contacted" ? "secondary" : "outline"}
              >
                {lead.status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{lead.email}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{lead.source}</span>
              <span className="mx-1">•</span>
              <span>{lead.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
