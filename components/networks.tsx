const networks = [
  { name: "TRC20", color: "oklch(0.62 0.21 18)", initial: "T" },
  { name: "ERC20", color: "oklch(0.62 0.14 250)", initial: "E" },
  { name: "BEP20", color: "oklch(0.78 0.16 85)", initial: "B" },
  { name: "Polygon", color: "oklch(0.6 0.2 295)", initial: "P" },
  { name: "Arbitrum", color: "oklch(0.62 0.16 245)", initial: "A" },
]

export function Networks() {
  return (
    <section className="mx-auto mt-6 max-w-7xl px-4 md:px-6">
      <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-border glass p-6 lg:flex-row-reverse lg:p-8">
        <div className="text-center lg:text-right">
          <h2 className="text-xl font-bold text-foreground">شبکه‌های پشتیبانی شده</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            تتر را در شبکه مورد نظر خود دریافت کنید
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-9">
          {networks.map((n) => (
            <li key={n.name} className="flex items-center gap-2.5">
              <span
                className="flex size-9 items-center justify-center rounded-full text-sm font-bold text-background"
                style={{ backgroundColor: n.color }}
                aria-hidden="true"
              >
                {n.initial}
              </span>
              <span className="font-mono text-sm font-semibold text-foreground" dir="ltr">
                {n.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
