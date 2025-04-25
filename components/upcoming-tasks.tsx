import { CalendarIcon, PhoneIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const upcomingTasks = [
  {
    id: 1,
    type: "call",
    contact: "Michael Johnson",
    time: "Today, 2:30 PM",
    description: "Follow-up call about service options",
  },
  {
    id: 2,
    type: "appointment",
    contact: "Sarah Williams",
    time: "Tomorrow, 10:00 AM",
    description: "Product demonstration meeting",
  },
  {
    id: 3,
    type: "call",
    contact: "David Chen",
    time: "Tomorrow, 3:15 PM",
    description: "Discuss contract renewal",
  },
  {
    id: 4,
    type: "appointment",
    contact: "Emily Rodriguez",
    time: "Apr 26, 11:30 AM",
    description: "Initial consultation",
  },
  {
    id: 5,
    type: "call",
    contact: "Robert Smith",
    time: "Apr 26, 4:00 PM",
    description: "Pricing inquiry follow-up",
  },
]

export default function UpcomingTasks() {
  return (
    <div className="space-y-4">
      {upcomingTasks.map((task) => (
        <div key={task.id} className="flex items-start gap-4">
          <div className="mt-1 rounded-full bg-muted p-2">
            {task.type === "call" ? (
              <PhoneIcon className="h-4 w-4 text-muted-foreground" />
            ) : (
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{task.contact}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ClockIcon className="h-3 w-3" />
                <span>{task.time}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{task.description}</p>
            <div className="flex gap-2 pt-1">
              <Button variant="outline" size="sm">
                {task.type === "call" ? "Start Call" : "View Details"}
              </Button>
              <Button variant="ghost" size="sm">
                Reschedule
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
