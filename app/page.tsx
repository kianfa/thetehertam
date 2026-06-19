import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { Networks } from "@/components/networks"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ScrollReveal>
          <StatsBar />
        </ScrollReveal>
        <ScrollReveal delay="sm">
          <Networks />
        </ScrollReveal>
        <ScrollReveal>
          <Features />
        </ScrollReveal>
        <ScrollReveal delay="sm">
          <HowItWorks />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal delay="sm">
          <Faq />
        </ScrollReveal>
        <ScrollReveal>
          <CtaSection />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  )
}
