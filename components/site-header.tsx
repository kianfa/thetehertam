"use client"

import { useState } from "react"
import { Menu, X, LogIn, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "خانه", href: "#home" },
  { label: "خرید تتر", href: "#buy" },
  { label: "راهنما", href: "#how" },
  { label: "امنیت", href: "#security" },
  { label: "سوالات متداول", href: "#faq" },
  { label: "تماس با ما", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
            <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">تتر‌تام</span>
            <span className="text-xs text-muted-foreground">خرید هوشمند تتر</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            className="gap-2 rounded-xl border-border bg-transparent text-foreground hover:bg-secondary"
          >
            <LogIn className="size-4" aria-hidden="true" />
            ورود
          </Button>
          <Button className="rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary/90 glow-ring">
            ثبت‌نام
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 glass lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                className="gap-2 rounded-xl border-border bg-transparent text-foreground"
              >
                <LogIn className="size-4" aria-hidden="true" />
                ورود
              </Button>
              <Button className="rounded-xl bg-primary font-semibold text-primary-foreground glow-ring">
                ثبت‌نام
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
