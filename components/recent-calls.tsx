import { Badge } from "@/components/ui/badge"
import { PhoneIncomingIcon, PhoneOutgoingIcon } from "lucide-react"

const recentCalls = [
  {
    id: 1,
    contact: "Michael Johnson",
    type: "outbound",
    duration: "3:24",
    status: "Completed",
    outcome: "Appointment Set",
    time: "10 minutes ago",
  },
  {
    id: 2,
    contact: "Sarah Williams",
    type: "inbound",
    duration: "5:12",
    status: "Completed",
    outcome: "Information Provided",
    time: "25 minutes ago",
  },
  {
    id: 3,
    contact: "David Chen",
    type: "outbound",
    duration: "2:45",
    status: "Completed",
    outcome: "Follow-up Scheduled",
    time: "1 hour ago",
  },
  {
    id: 4,
    contact: "Emily Rodriguez",
    type: "outbound",
    duration: "1:30",
    status: "No Answer",
    outcome: "Voicemail Left",
    time: "2 hours ago",
  },
]

export default function RecentCalls() {
  return (
    <div className="space-y-4">
      {recentCalls.map((call) => (
        <div key={call.id} className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-muted p-2">
            {call.type === "outbound" ? (
              <PhoneOutgoingIcon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <PhoneIncomingIcon className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{call.contact}</p>
              <Badge variant={call.status === "Completed" ? "outline" : "secondary"}>{call.status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground">{call.outcome}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{call.type === "outbound" ? "Outbound" : "Inbound"}</span>
              <span className="mx-1">•</span>
              <span>{call.duration}</span>
              <span className="mx-1">•</span>
              <span>{call.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
