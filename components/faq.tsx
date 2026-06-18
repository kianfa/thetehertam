"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "تحویل تتر چقدر زمان می‌برد؟",
    a: "پس از تایید پرداخت، تتر شما به‌صورت میانگین در کمتر از ۵ دقیقه به آدرس کیف پولی که وارد کرده‌اید واریز می‌شود.",
  },
  {
    q: "آیا برای خرید نیاز به احراز هویت دارم؟",
    a: "خیر، برای خریدهای معمول نیازی به احراز هویت نیست و می‌توانید به‌سرعت و آسان خرید خود را انجام دهید.",
  },
  {
    q: "تتر در چه شبکه‌هایی قابل دریافت است؟",
    a: "ما از شبکه‌های TRC20، ERC20، BEP20، Polygon و Arbitrum پشتیبانی می‌کنیم. هنگام خرید می‌توانید شبکه دلخواه خود را انتخاب کنید.",
  },
  {
    q: "آیا کارمزد پنهانی وجود دارد؟",
    a: "خیر، نرخ نمایش‌داده‌شده نهایی است و هیچ کارمزد پنهانی به آن اضافه نمی‌شود. تنها کارمزد شبکه بلاکچین ممکن است اعمال شود.",
  },
  {
    q: "اگر آدرس کیف پول را اشتباه وارد کنم چه می‌شود؟",
    a: "لطفاً قبل از تایید، آدرس کیف پول و شبکه را با دقت بررسی کنید. تراکنش‌های بلاکچین برگشت‌ناپذیرند؛ در صورت نیاز پشتیبانی ۲۴ ساعته ما شما را راهنمایی می‌کند.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border/60 bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">سوالات متداول</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            پاسخ به پرسش‌های شما
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-foreground">{item.q}</span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
