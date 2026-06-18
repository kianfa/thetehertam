import { Wallet, Layers, Clock, Headphones, Lock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "تحویل مستقیم به کیف پول",
    desc: "تتر خریداری‌شده بدون واسطه و فوراً به آدرس کیف پول شخصی شما واریز می‌شود.",
  },
  {
    icon: Layers,
    title: "بدون نیاز به موجودی صرافی",
    desc: "نیازی به شارژ حساب یا نگهداری دارایی در صرافی نیست؛ فقط خرید کنید و دریافت نمایید.",
  },
  {
    icon: Clock,
    title: "پردازش سریع",
    desc: "میانگین زمان تحویل کمتر از ۵ دقیقه است تا بدون معطلی به دارایی خود برسید.",
  },
  {
    icon: Headphones,
    title: "پشتیبانی ۲۴ ساعته",
    desc: "تیم پشتیبانی ما در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات شماست.",
  },
  {
    icon: Lock,
    title: "استانداردهای بالای امنیتی",
    desc: "تمام تراکنش‌ها با پروتکل‌های رمزنگاری پیشرفته و چندلایه محافظت می‌شوند.",
  },
  {
    icon: Sparkles,
    title: "بهترین نرخ بازار",
    desc: "نرخ لحظه‌ای و رقابتی برای خرید تتر بدون کارمزدهای پنهان و اضافه.",
  },
]

export function Features() {
  return (
    <section id="buy" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold text-primary">چرا تتر‌تام؟</span>
        <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
          خریدی ساده، سریع و کاملاً امن
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
          ما همه چیز را طراحی کرده‌ایم تا تجربه خرید تتر برای شما بدون پیچیدگی و با
          بالاترین اطمینان باشد.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:glow-ring"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/25 transition-colors group-hover:bg-primary/20">
              <f.icon className="size-6 text-primary" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
