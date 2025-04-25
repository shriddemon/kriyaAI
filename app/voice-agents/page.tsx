// app/voice-agents/page.tsx
'use client'
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PhoneCallIcon, PlusIcon, SearchIcon, SettingsIcon, PlayIcon, PauseIcon, WandIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge";

interface Agent {
  _id: string;
  name: string;
  description: string;
  status: string;
  calls: number;
  successRate: string;
  lastModified: string;
  model: string;
  voice: string;
}

export default function VoiceAgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch('/api/agents'); // Use relative URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  if (isLoading) {
    return <div>Loading agents...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Voice Agents</h1>
          </div>
          <Card className="mt-4 flex items-center rounded-lg border-2 border-dashed p-6 text-center hover:border-primary">
            <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
              <WandIcon className="h-10 w-10 text-primary" />
              <h3 className="text-lg font-semibold">Create Your First Voice Agent</h3>
              <p className="text-sm text-muted-foreground">
                Start making your AI agent a reality. Get ready to customize its
                personality, responses, and more!
              </p>
              <Button asChild className="mt-2 w-full">Create Agent</Button>
            </div>
          </Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input placeholder="Search voice agents..." className="h-9" />
              <Button variant="outline" size="sm" className="h-9 px-3">
                <SearchIcon className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Card key={agent._id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{agent.name}</CardTitle>
                    <Badge
                      variant={
                        agent.status === "Active" ? "default" : agent.status === "Paused" ? "destructive" : "outline"
                      }
                    >
                      {agent.status}
                    </Badge>
                  </div>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Calls</p>
                      <p className="font-medium">{agent.calls?.toLocaleString()}</p>
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
                    <Link href={`/voice-agents/${agent._id}`}>
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}