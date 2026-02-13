import { Card, CardContent } from '@/sections/shared/components/ui-custom/card'
import { Tagline } from '@/sections/shared/components/pro-blocks/landing-page/tagline'

export function BentoGrid6() {
  return (
    <section className="bg-background section-padding-y border-b" id="features">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline className="bg-red-300">Posts</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">
            A continuación se presentan varios posts relacionados con las
            características de nuestra plataforma.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl p-0 lg:col-span-2">
            <img
              src="public/plataforma-completa.png"
              alt="plataforma-completa"
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <img
              src="public/plataforma-completa.png"
              alt="plataforma-completa-movile"
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Trámites ciudadanos en línea
              </h3>
              <p className="text-muted-foreground">
                Gestiona tus consultas y trámites municipales sin filas ni
                desplazamientos, desde tu hogar o dispositivo móvil.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl p-0 lg:col-span-1">
            <img
              src="/public/historial-pagos.png"
              alt="Universal Search"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Pagos en línea seguros
              </h3>
              <p className="text-muted-foreground">
                Los pagos de tasas, impuestos y servicios se realizan de forma
                segura y confiable a través de la pasarela de pagos PlacetoPay.
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl p-0 lg:col-span-1">
            <img
              src="/smart-tags.png"
              alt="AI Meeting Notes"
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Seguridad de tus datos
              </h3>
              <p className="text-muted-foreground">
                Azogues en Línea opera con mecanismos de seguridad que protegen
                tu información personal y sensible durante todo el proceso
                digital.
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-muted/80 gap-0 overflow-hidden rounded-xl p-0 lg:col-span-2">
            <img
              src="/team-insights.png"
              alt="Team Insights"
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <img
              src="/team-insights_mobile.png"
              alt="Team Insights"
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Estado de tus trámites y pagos
              </h3>
              <p className="text-muted-foreground">
                Consulta en tiempo real el estado de tus trámites y pagos, desde
                la solicitud hasta la resolución final, sin necesidad de visitar
                una oficina municipal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
