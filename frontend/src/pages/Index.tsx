import RUHeader from "@/components/RUHeader";
import SearchPanel, { type SearchMode } from "@/components/SearchPanel";
import ResultCard, { type ResultItem } from "@/components/ResultCard";
import ChatPanel from "@/components/ChatPanel";
import { useState } from "react";

const mockResults = (mode: SearchMode, query: string): ResultItem[] => {
  const base: ResultItem[] = [
    {
      id: "1",
      title:
        mode === "course"
          ? `${query.toUpperCase()} • Intro Concepts`
          : `${query} • CS Department`,
      subtitle:
        mode === "course"
          ? "School of Arts & Sciences"
          : "School of Arts & Sciences",
      rating: 4.2,
      review:
        "Clear expectations, fair grading, and solid lectures. Weekly assignments keep you on track.",
      summary:
        "Popular choice for first-years; manageable if you keep up with practice.",
    },
    {
      id: "2",
      title:
        mode === "course"
          ? `${query.toUpperCase()} • Data Structures`
          : `${query} • Math Department`,
      subtitle: mode === "course" ? "Computer Science" : "Mathematics",
      rating: 3.7,
      review:
        "Challenging midterms. Office hours are helpful. Projects can be time-consuming but rewarding.",
      summary:
        "Heavier workload; plan study groups and start assignments early.",
    },
  ];
  return base;
};

const Index = () => {
  const [results, setResults] = useState<ResultItem[]>([]);
  const [lastQuery, setLastQuery] = useState<string>("");
  const [lastMode, setLastMode] = useState<SearchMode>("course");

  const handleSearch = (mode: SearchMode, query: string) => {
    setLastMode(mode);
    setLastQuery(query);
    setResults(mockResults(mode, query));
  };

  return (
    <main>
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--primary)/0.08)] to-transparent" />
        <RUHeader />
      </section>

      <SearchPanel onSearch={handleSearch} />

      <section className="px-4 py-6">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {results.length > 0 ? "Results" : "Search Results"}
              </h2>
              {lastQuery && (
                <p className="text-sm text-muted-foreground">
                  Showing {lastMode} matches for “{lastQuery}”
                </p>
              )}
            </div>

            {results.length === 0 ? (
              <div className="rounded-lg border p-6 bg-card">
                <p className="text-muted-foreground">
                  Try searching for a course like{" "}
                  <span className="font-medium">CS111</span> or a professor like
                  <span className="font-medium"> Dr. Smith</span>.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {results.map((r) => (
                  <ResultCard key={r.id} item={r} />
                ))}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 h-[60vh] lg:h-[calc(100vh-9rem)]">
            <ChatPanel className="h-full" />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Index;
