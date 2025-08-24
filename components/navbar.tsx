"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Film, Plus, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Watchlist",
      icon: Home,
    },
    {
      href: "/add",
      label: "Add Movie",
      icon: Plus,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Movie Watchlist</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  className={`flex items-center space-x-2 transition-colors ${
                    pathname === item.href 
                      ? "bg-muted text-foreground font-medium" 
                      : ""
                  } hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              )
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={cn(
                    "flex flex-col items-center space-y-1 h-auto py-2 px-3",
                    pathname === item.href && "bg-primary text-primary-foreground",
                  )}
                >
                  <Link href={item.href}>
                    <Icon className="h-5 w-5" />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
