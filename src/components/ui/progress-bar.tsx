import { cn } from "@/lib/utils"

interface ProgressBarProps {
  total: number
  completed: number
  className?: string
}

export function ProgressBar({ total, completed, className }: ProgressBarProps) {
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 w-2 rounded-full",
            i < completed ? "bg-green-500" : i === completed ? "bg-green-500 opacity-50" : "bg-gray-200"
          )}
        />
      ))}
    </div>
  )
} 