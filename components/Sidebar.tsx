"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  HomeIcon, 
  PhoneIcon, 
  CalendarIcon, 
  CreditCardIcon, 
  CogIcon, 
  LightBulbIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname()
  
  const routes = [
    {
      name: "Tableau de bord",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Historique des appels",
      href: "/appels",
      icon: PhoneIcon,
    },
    {
      name: "Rendez-vous",
      href: "/rendez-vous",
      icon: CalendarIcon,
    },
    {
      name: "Facturation",
      href: "/facturation",
      icon: CreditCardIcon,
    },
    {
      name: "Paramètres",
      href: "/parametres",
      icon: CogIcon,
    },
    {
      name: "Insights & Recommendations",
      href: "/insights",
      icon: LightBulbIcon,
    },
    {
      name: "Statistiques",
      href: "/statistiques",
      icon: ChartBarIcon,
    }
  ]

  return (
    <div className={cn("pb-12 w-64 bg-card/50 backdrop-blur-sm border-r border-border/40", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
              Assistant IA
            </h2>
          </div>
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-muted-foreground">
              Dashboard v1.0
            </span>
            <ModeToggle />
          </div>
        </div>
        <div className="px-4 pt-6">
          <nav className="space-y-1.5">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  pathname === route.href 
                    ? "bg-accent/80 text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-secondary hover:text-primary-foreground"
                )}
              >
                <route.icon className={cn(
                  "h-5 w-5",
                  pathname === route.href 
                    ? "text-primary" 
                    : "text-muted-foreground group-hover:text-primary-foreground"
                )} />
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
} 