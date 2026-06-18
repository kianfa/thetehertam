import { WalletCards, CreditCard, BadgeCheck } from "lucide-react"

const steps = [
  {
    icon: WalletCards,
    num: "۰۱",
    title: "آدرس کیف پول را وارد کنید",
    desc: "شبکه مورد نظر (TRC20، ERC20 و ...) را انتخاب و آدرس کیف پول خود را وارد کنید.",
  },
  {
    icon: CreditCard,
    num: "۰۲",
    title: "پرداخت را انجام دهید",
    desc: "مبلغ خرید را مشاهده و با درگاه امن بانکی به‌صورت لحظه‌ای پرداخت کنید.",
  },
  {
    icon: BadgeCheck,
    num: "۰۳",
    title: "تتر را دریافت کنید",
    desc: "در کمتر از ۵ دقیقه تتر به‌صورت مستقیم در کیف پول شخصی شما واریز می‌شود.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 border-y border-border/60 bg-card/40 py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-fade opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold text-primary">راهنمای خرید</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            تنها در ۳ گام ساده
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            خرید تتر هیچ‌وقت به این سادگی نبوده است.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="relative rounded-2xl border border-border bg-card p-7 text-center"
            >
              <span
                className="absolute left-5 top-5 font-mono text-3xl font-extrabold text-primary/20"
                dir="ltr"
                aria-hidden="true"
              >
                {s.num}
              </span>
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/25">
                <s.icon className="size-7 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
