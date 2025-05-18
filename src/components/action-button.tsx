import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionButtonProps {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "outline"
}

export function ActionButton({
  icon: Icon,
  label,
  onClick,
  className,
  variant = "primary",
}: ActionButtonProps) {
  const variants = {
    primary: "bg-red-500 text-white",
    secondary: "bg-slate-600 text-white",
    outline: "bg-slate-100 text-slate-600 border-2 border-slate-200",
  }

  return (
    <button
      onClick={onClick}
      className={cn("flex flex-col items-center gap-2", className)}
    >
      <div
        className={cn(
          "h-12 w-12 rounded-full flex items-center justify-center",
          variants[variant]
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-medium text-slate-600">{label}</span>
    </button>
  )
} 