import logo from "../logo.svg";
import ThemeToggle from "./ThemeToggle";

const RUHeader = () => {
  return (
    <header className="pt-6 pb-8">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Rutgers block R logo"
              width={44}
              height={44}
              loading="lazy"
              className="select-none"
            />
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              RU Course Advisor AI
            </h1>
          </div>
          <ThemeToggle />
        </div>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Search Rutgers courses and professors, read reviews, and chat with AI
          for quick, reliable class advice.
        </p>
        <div
          aria-hidden
          className="mt-4 h-1 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] animate-bg-pan bg-[length:200%_200%]"
        />
      </div>
    </header>
  );
};

export default RUHeader;
