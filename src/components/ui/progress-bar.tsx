import { cn } from "@/lib/utils"

interface ProgressBarProps {
  total: number
  completed: number
  className?: string
}

export function ProgressBar({ total, completed, className }: ProgressBarProps) {
  return (
    <div className={cn("flex gap-1.5", className)}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 rounded-full flex-1",
            i < completed ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"
          )}
        />
      ))}
    </div>
  )
} 