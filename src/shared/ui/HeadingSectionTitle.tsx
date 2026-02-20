interface TitleProps {
  title: string;
}

export default function HeadingSectionTitle({ title }: TitleProps) {
  return (
    <div className="flex w-full items-center gap-4">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-[var(--foreground)] sm:text-3xl md:text-4xl">
        <span className="text-[var(--primary)]">#</span>
        <span className="italic">{title}</span>
      </h2>
      <div className="h-px flex-1 bg-[var(--border)] min-w-[4rem]" aria-hidden />
    </div>
  );
}
