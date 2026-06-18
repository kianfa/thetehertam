import { ArrowLeft, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="security" className="scroll-mt-24 px-4 py-20 md:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 text-center md:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <ShieldCheck className="size-4" aria-hidden="true" />
            امنیت تضمین‌شده
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            همین حالا اولین تتر خود را دریافت کنید
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground leading-relaxed">
            بدون پیچیدگی، بدون انتظار. تنها در چند دقیقه تتر را مستقیماً در کیف پول
            خود تحویل بگیرید.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-13 w-full gap-2 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground hover:bg-primary/90 glow-ring sm:w-auto"
            >
              خرید تتر
              <ArrowLeft className="size-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 w-full rounded-xl border-border bg-transparent px-8 text-base font-semibold text-foreground hover:bg-secondary sm:w-auto"
            >
              مشاوره رایگان
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
