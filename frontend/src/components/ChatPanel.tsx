import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "ai";
  content: string;
}

const ChatPanel = ({ className }: { className?: string }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      content: "Hi! Ask me about Rutgers courses, professors, and schedules.",
    },
  ]);
  const [input, setInput] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    const next = [...messages, { role: "user", content: text } as Message];
    // Simulated AI reply
    const ai: Message = {
      role: "ai",
      content:
        "Here's a quick take: difficulty depends on instructor and workload pacing. Check ratings for recent semesters and balance with your schedule.",
    };
    setMessages([...next, ai]);
  };

  return (
    <section className={cn("pb-10", className)}>
      <Card className="h-full flex flex-col">
        <CardHeader className="shrink-0">
          <CardTitle>Chat with AI</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col min-h-0">
          <div className="space-y-3 flex-1 overflow-y-auto pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "ai"
                    ? "rounded-md bg-accent/50 p-3"
                    : "rounded-md border p-3"
                }
              >
                <p className="text-sm leading-relaxed">{m.content}</p>
              </div>
            ))}
          </div>
          <form onSubmit={send} className="mt-4 flex gap-2">
            <Input
              aria-label="Ask a question"
              placeholder="e.g., How hard is CS111 with Prof. X?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" variant="default">
              <Send />
              Ask
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ChatPanel;
