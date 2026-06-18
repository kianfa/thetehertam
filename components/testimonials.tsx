import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "علی محمدی",
    role: "تریدر ارز دیجیتال",
    text: "سرعت تحویل واقعاً عالیه. کمتر از سه دقیقه تتر تو کیف پولم بود. نرخ‌هاشون هم از همه جا بهتره.",
  },
  {
    name: "سارا کریمی",
    role: "فریلنسر",
    text: "بدون احراز هویت و خیلی ساده خرید کردم. پشتیبانی هم سریع جواب داد. کاملاً راضی‌ام.",
  },
  {
    name: "رضا احمدی",
    role: "کارآفرین",
    text: "چندین بار خرید کردم و هر بار بدون مشکل و مستقیم به کیف پولم واریز شده. به همه پیشنهاد می‌کنم.",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold text-primary">نظر کاربران</span>
        <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
          اعتماد هزاران کاربر
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <Quote className="size-8 text-primary/30" aria-hidden="true" />
            <div className="mt-3 flex gap-1" aria-label="امتیاز ۵ از ۵">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              {t.text}
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {t.name.charAt(0)}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
