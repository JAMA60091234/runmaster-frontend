import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Calendar, BarChart2, Users, HelpCircle, Home } from "lucide-react"

const navItems = [
  { label: "Today", icon: Home, href: "/" },
  { label: "Plan", icon: Calendar, href: "/plan" },
  { label: "Activities", icon: BarChart2, href: "/activities" },
  { label: "Community", icon: Users, href: "/community" },
  { label: "Support", icon: HelpCircle, href: "/support" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-between px-4 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 