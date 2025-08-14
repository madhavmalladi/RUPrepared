import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export type SearchMode = "course" | "professor";

interface SearchPanelProps {
  onSearch: (mode: SearchMode, query: string) => void;
}

const SearchPanel = ({ onSearch }: SearchPanelProps) => {
  const [mode, setMode] = useState<SearchMode>("course");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(mode, query.trim());
  };

  return (
    <section className="px-4">
      <div className="mx-auto max-w-3xl">
        <Tabs value={mode} onValueChange={(v) => setMode(v as SearchMode)}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="professor">Professor</TabsTrigger>
          </TabsList>
          <TabsContent value="course">
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                aria-label="Search courses by code"
                placeholder="e.g., CS111, MATH151"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="default">
                <Search />
                Search
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="professor">
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                aria-label="Search professors by name"
                placeholder="e.g., Jane Doe, Dr. Smith"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" variant="default">
                <Search />
                Search
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SearchPanel;
