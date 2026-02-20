import { Button } from "@/shared/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-2xl font-bold text-[var(--foreground)]">404</h1>
      <p className="text-center text-[var(--foreground-muted)]">
        Страница не найдена
      </p>
      <Button variant="primary" as="a" href="/">
        На главную
      </Button>
    </div>
  );
}
