"use client"

import { useEffect, useRef, useState } from "react"
import { BadgeCheck, Users, Smile, Timer } from "lucide-react"

type Stat = {
  icon: typeof BadgeCheck
  prefix: string
  value: number
  suffix: string
  label: string
  sub: string
  decimals?: number
}

const stats: Stat[] = [
  { icon: BadgeCheck, prefix: "+", value: 2, suffix: "M", label: "تراکنش موفق", sub: "در ۳۰ روز گذشته" },
  { icon: Users, prefix: "+", value: 500, suffix: "K", label: "کاربر فعال", sub: "در سراسر کشور" },
  { icon: Smile, prefix: "+", value: 99.9, suffix: "%", label: "رضایت کاربران", sub: "از خدمات ما", decimals: 1 },
  { icon: Timer, prefix: "", value: 5, suffix: " دقیقه", label: "میانگین زمان تحویل", sub: "به کیف پول شما" },
]

function useCountUp(target: number, start: boolean, decimals = 0, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return decimals ? val.toFixed(decimals) : Math.round(val).toString()
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const display = useCountUp(stat.value, start, stat.decimals)
  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-center">
      <div className="flex flex-col items-center gap-1">
        <p className="font-mono text-2xl font-extrabold text-primary md:text-3xl" dir="ltr">
          {stat.prefix}
          {display}
          {stat.suffix}
        </p>
        <p className="text-sm font-semibold text-foreground">{stat.label}</p>
        <p className="text-xs text-muted-foreground">{stat.sub}</p>
      </div>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/25">
        <stat.icon className="size-6 text-primary" aria-hidden="true" />
      </span>
    </div>
  )
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          ob.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <section className="relative mx-auto mt-6 max-w-7xl px-4 md:mt-8 md:px-6">
      <div
        ref={ref}
        className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border glass p-2 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse"
      >
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} start={show} />
        ))}
      </div>
    </section>
  )
}
