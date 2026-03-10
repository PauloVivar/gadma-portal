import { Check, ArrowRight } from 'lucide-react'
import { Tagline } from '@/sections/landing/components/landing-page/tagline'
import { Button } from '@/shared/components/ui/button'
import { AspectRatio } from '@/shared/components/ui/aspect-ratio'

export function HeroSection2() {
  return (
    <section
      className="bg-secondary section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline className="bg-red-300 font-bold">
              GAD MUNICIPAL DE AZOGUES
            </Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl">
              Bienvenido al portal web del Gad Municipal de Azogues
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              En este portal encontraras información sobre trámites municipales,
              servicios, noticias y eventos relacionados con el GAD Municipal de
              Azogues.
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Como realizar el registro ciudadano
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Como realizar el pago de impuestos municipales en línea
              </span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">
                Dudas, soporte y seguimiento sobre trámites municipales
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Ver Información</Button>
            <Button variant="ghost">
              Ir
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1 shadow-sm rounded-xl border border-neutral-200">
          <AspectRatio ratio={1 / 1}>
            <a
              href="https://enlinea.azogues.gob.ec/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/paga-tus-impuestos-w.png"
                alt="san-francisco"
                className="h-full w-full rounded-xl object-cover"
              />
            </a>
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
