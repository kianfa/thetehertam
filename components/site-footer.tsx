import { ShieldCheck, Send, Mail, Phone } from "lucide-react"

const columns = [
  {
    title: "خدمات",
    links: ["خرید تتر", "فروش تتر", "نرخ لحظه‌ای", "کیف پول"],
  },
  {
    title: "شرکت",
    links: ["درباره ما", "بلاگ", "تماس با ما", "فرصت‌های شغلی"],
  },
  {
    title: "قوانین",
    links: ["قوانین و مقررات", "حریم خصوصی", "راهنمای امنیت", "سوالات متداول"],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border/60 bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold text-foreground">تتر‌تام</span>
                <span className="text-xs text-muted-foreground">خرید هوشمند تتر</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              پلتفرم تخصصی خرید تتر با تحویل مستقیم در کیف پول شخصی شما؛ امن، سریع و
              با بهترین نرخ بازار.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Mail className="size-4" aria-hidden="true" />
                support@tetertam.com
              </a>
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-primary" dir="ltr">
                <Phone className="size-4" aria-hidden="true" />
                +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-bold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} تتر‌تام. تمامی حقوق محفوظ است.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Send className="size-4" aria-hidden="true" />
            کانال تلگرام
          </a>
        </div>
      </div>
    </footer>
  )
}
