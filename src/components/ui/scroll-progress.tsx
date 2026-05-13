import { cn } from "@/lib/utils";

interface ScrollProgressProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({ className, ref, ...props }: ScrollProgressProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "scroll-progress fixed inset-x-0 top-[4.5rem] z-[115] h-1 origin-left bg-linear-to-r from-[var(--color-brand-primary-soft)] via-[var(--color-brand-primary)] to-[var(--color-brand-accent)] md:top-[5.5rem]",
        className
      )}
      {...props}
    />
  );
}
