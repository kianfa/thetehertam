import { ChevronDown, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden md:min-h-[calc(100svh-5rem)]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/usdt-wallet-hero.jpg')] bg-cover bg-center bg-black"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/usdt-wallet-hero.jpg"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute inset-0 size-full transform-gpu bg-black object-cover object-center will-change-transform"
        >
          <source
            src="/videos/hero-background-av1.webm"
            type={`video/webm; codecs="av01.0.05M.08"`}
          />
          <source
            src="/videos/hero-background-vp9.webm"
            type={`video/webm; codecs="vp9"`}
          />
          <source src="/videos/hero-background-fallback.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center justify-end px-4 py-6 md:min-h-[calc(100svh-5rem)] md:px-6 md:py-8 lg:py-6">
        <div className="w-full max-w-lg lg:mr-0 lg:-translate-x-12">
          <div className="mb-3 flex justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <ShieldCheck className="size-4" aria-hidden="true" />
              امن، سریع، مطمئن
            </span>
          </div>

          <div
            dir="rtl"
            className="glass glow-ring overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-4 shadow-[0_24px_60px_-36px_oklch(0.74_0.18_158_/_0.45)] backdrop-blur-xl md:p-5 lg:p-4"
          >
            <div className="flex flex-col gap-2.5 border-b border-border/70 pb-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="text-right">
                <h1 className="text-xl font-extrabold text-foreground md:text-2xl">
                  خرید تتر (USDT)
                </h1>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  خرید سریع و امن تتر با نمایش شفاف نرخ و کارمزد، مستقیم به کیف پول
                  شخصی شما.
                </p>
              </div>

              <span className="inline-flex w-fit items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.16em] text-primary">
                USDT
              </span>
            </div>

            <form className="mt-4 space-y-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <div className="space-y-1.5 text-right">
                  <label
                    htmlFor="payment-amount"
                    className="block text-sm font-semibold text-foreground"
                  >
                    مبلغ پرداختی (تومان)
                  </label>
                  <input
                    id="payment-amount"
                    name="paymentAmount"
                    type="text"
                    inputMode="numeric"
                    placeholder="مبلغ مورد نظر را وارد کنید"
                    className="h-11 w-full rounded-2xl border border-border bg-background/60 px-4 text-right text-sm text-foreground placeholder:text-muted-foreground/90 transition-colors outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <div className="space-y-1.5 text-right">
                  <span className="block text-sm font-semibold text-foreground">
                    مقدار تقریبی تتر دریافتی
                  </span>
                  <div className="flex h-11 items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4">
                    <span className="text-sm font-semibold text-primary">USDT</span>
                    <span className="text-xl font-extrabold text-foreground md:text-2xl">
                      ۰.۰۰
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5 text-right">
                  <label
                    htmlFor="transfer-network"
                    className="block text-sm font-semibold text-foreground"
                  >
                    شبکه انتقال
                  </label>
                  <div className="relative">
                    <select
                      id="transfer-network"
                      name="transferNetwork"
                      defaultValue="TRC20"
                      className="h-11 w-full appearance-none rounded-2xl border border-border bg-background/60 px-4 pl-12 text-right text-sm text-foreground transition-colors outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                    >
                      <option value="TRC20">TRC20</option>
                      <option value="ERC20">ERC20</option>
                      <option value="BEP20">BEP20</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-right">
                  <span className="block text-sm font-semibold text-foreground">
                    نرخ لحظه‌ای تتر
                  </span>
                  <div className="flex h-11 items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4">
                    <span className="text-sm text-muted-foreground">تومان</span>
                    <span className="text-base font-bold text-foreground">
                      ۱۷۲٬۰۰۰ تومان
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-right">
                <label
                  htmlFor="wallet-address"
                  className="block text-sm font-semibold text-foreground"
                >
                  آدرس کیف پول مقصد
                </label>
                <input
                  id="wallet-address"
                  name="walletAddress"
                  type="text"
                  dir="ltr"
                  placeholder="آدرس کیف پول خود را وارد کنید"
                  className="h-11 w-full rounded-2xl border border-border bg-background/60 px-4 text-left text-sm text-foreground placeholder:text-right placeholder:text-muted-foreground/90 transition-colors outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/35 px-4 py-3 text-right">
                  <span className="block text-sm font-semibold text-foreground">
                    کارمزد شبکه
                  </span>
                  <span className="mt-1 block text-base font-bold text-primary">
                    ۱.۵ USDT
                  </span>
                </div>

                <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <ShieldCheck className="size-4" aria-hidden="true" />
                    امنیت انتقال
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-muted-foreground">
                    آدرس و شبکه را پیش از نهایی‌سازی سفارش با دقت بررسی کنید.
                  </span>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-11 w-full rounded-2xl bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90"
              >
                خرید تتر
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
