import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SettingsIcon, PlayIcon, PauseIcon } from "lucide-react"
import Link from "next/link"

interface VoiceAgentCardProps {
  agent: {
    id: number
    name: string
    description: string
    status: string
    calls: number
    successRate: string
    lastModified: string
    model: string
    voice: string
  }
}

export default function VoiceAgentCard({ agent }: VoiceAgentCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{agent.name}</CardTitle>
          <Badge variant={agent.status === "Active" ? "default" : agent.status === "Paused" ? "secondary" : "outline"}>
            {agent.status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{agent.description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Total Calls</p>
            <p className="font-medium">{agent.calls.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Success Rate</p>
            <p className="font-medium">{agent.successRate}</p>
          </div>
          <div>
            <p className="text-muted-foreground">LLM Model</p>
            <p className="font-medium">{agent.model}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Voice Type</p>
            <p className="font-medium">{agent.voice}</p>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">Last modified: {agent.lastModified}</div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link href={`/voice-agents/${agent.id}`}>
            <SettingsIcon className="mr-2 h-4 w-4" />
            Configure
          </Link>
        </Button>
        {agent.status === "Active" ? (
          <Button variant="outline" size="sm" className="flex-1">
            <PauseIcon className="mr-2 h-4 w-4" />
            Pause
          </Button>
        ) : (
          <Button variant="outline" size="sm" className="flex-1">
            <PlayIcon className="mr-2 h-4 w-4" />
            Activate
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
