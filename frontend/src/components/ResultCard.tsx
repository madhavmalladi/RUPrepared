import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export interface ResultItem {
  id: string;
  title: string; // Course or Professor title
  subtitle?: string; // Extra context like department or course code
  rating: number; // 0-5
  review: string;
  summary?: string; // AI summary
}

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const active = i < Math.round(rating);
        return (
          <Star
            key={i}
            className={active ? "text-primary" : "text-muted-foreground/40"}
            fill={active ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
};

const ResultCard = ({ item }: { item: ResultItem }) => {
  return (
    <Card className="transition-transform hover:-translate-y-0.5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3">
          <span>{item.title}</span>
          <Stars rating={item.rating} />
        </CardTitle>
        {item.subtitle && (
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed">{item.review}</p>
        {item.summary && (
          <div className="rounded-md border p-3 bg-accent/40">
            <p className="text-sm">
              <span className="font-medium">AI summary: </span>
              {item.summary}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultCard;
