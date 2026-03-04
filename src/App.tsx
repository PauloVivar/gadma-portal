import { LpNavbar1 } from '@/sections/landing/components/landing-page/lp-navbars/lp-navbar-1'
import { HeroSection2 } from '@/sections/landing/components/landing-page/hero-sections/hero-section-2'
import { LogoSection10 } from '@/sections/landing/components/landing-page/logo-sections/logo-section-7'
import TestimonialsSection1 from '@/sections/landing/components/landing-page/testimonials-sections/testimonials-section-1'
import { BentoGrid6 } from '@/sections/landing/components/landing-page/bento-grids/bento-grid-6'
import { FeatureSection9 } from '@/sections/landing/components/landing-page/feature-sections/feature-section-9'
// import { StatsSection4 } from '@/sections/shared/components/pro-blocks/landing-page/stats-sections/stats-section-4'
// import { PricingSection3 } from '@/sections/shared/components/pro-blocks/landing-page/pricing-sections/pricing-section-3'
import { FaqSection2 } from '@/sections/landing/components/landing-page/faq-sections/faq-section-2'
import { Footer1 } from '@/sections/landing/components/landing-page/footers/footer-1'

function App() {
  return (
    <main className="font-sans antialiased">
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="Olvídate de las filas y el papeleo. Con **Azogues en Línea** puedes consultar, pagar y gestionar tus trámites desde casa, de forma segura y ágil."
        authorName="Gad Municipal de Azogues"
        authorRole="Departamento de Sistemas"
        avatarSrc="/azogues-escudo.svg"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      {/* <StatsSection4 /> */}
      <TestimonialsSection1
        quote="El Municipio de Azogues ahora está a un clic de distancia. Con **Azogues en Línea**, realiza trámites y pagos en línea y disfruta de una atención más rápida y moderna."
        authorName="Gad Municipal de Azogues"
        authorRole="Departamento de Sistemas"
        avatarSrc="/azogues-escudo.svg"
      />
      {/* <PricingSection3 /> */}
      <FaqSection2 />
      <Footer1 />
    </main>
  )
}

export default App
