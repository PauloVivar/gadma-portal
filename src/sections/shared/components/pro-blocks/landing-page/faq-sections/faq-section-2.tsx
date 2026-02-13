import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/sections/shared/components/ui-custom/accordion'
import { Tagline } from '@/sections/shared/components/pro-blocks/landing-page/tagline'

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column */}
          <div className="section-title-gap-lg flex flex-1 flex-col">
            {/* Category Tag */}
            <Tagline className="bg-red-300">FAQ</Tagline>
            {/* Main Title */}
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Encuentre respuestas a preguntas frecuentes
            </h1>
            {/* Section Description */}
            <p className="text-muted-foreground">
              Hemos recopilado la información más importante para ayudarte a
              aprovechar al máximo tu experiencia. ¿No encuentras lo que buscas?{' '}
              <a href="#" className="text-primary underline">
                Contact us.
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-8">
            {/* General FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                General
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="General FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    ¿Cuál es el tamaño máximo permitido para los archivos
                    adjuntos en el Registro Ciudadano?
                  </AccordionTrigger>
                  <AccordionContent>
                    Los archivos correspondientes a: Selfie con documento de
                    identidad en imagen y Documento de identidad escaneado en
                    PDF deben tener un tamaño máximo de 512 KB cada uno. El
                    sistema no permitirá la carga de archivos que superen este
                    límite.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    ¿Qué sucede si no se cumplen los requisitos establecidos en
                    el Registro Ciudadano?
                  </AccordionTrigger>
                  <AccordionContent>
                    El incumplimiento de los requisitos de formato, tamaño o
                    claridad podrá ocasionar el rechazo de la solicitud de
                    registro, conforme a las políticas de validación
                    institucional.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    ¿Necesito crear una cuenta para cada trámite?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, una vez registrado, puede usar la misma cuenta para
                    todos los trámites.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    ¿Puedo guardar mi solicitud de trámite y continuar después?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, el sistema no guarda el progreso de una solicitud
                    incompleta, es decir si no se registra.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 5 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    ¿Puedo realizar el trámite desde mi celular?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, el sistema es responsive y funciona en dispositivos
                    móviles.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Billing FAQ Section */}
            <div className="flex flex-col gap-2">
              {/* Section Title */}
              <h2 className="text-foreground text-lg font-semibold md:text-xl">
                Pagos y Facturación en línea
              </h2>
              {/* FAQ Accordion */}
              <Accordion
                type="single"
                collapsible
                aria-label="Billing FAQ items"
              >
                {/* FAQ Item 1 */}
                <AccordionItem value="billing-1">
                  <AccordionTrigger className="text-left">
                    ¿Es seguro ingresar mis datos bancarios en la plataforma
                    enlinea.azogues?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, es completamente seguro. El GAD Municipal de Azogues
                    delega en Placetopay la captura de información sensible. La
                    plataforma cumple con la norma internacional PCI DSS y
                    utiliza encriptación SSL de 256 bits. Tus datos bancarios
                    están protegidos y no son almacenados.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 2 */}
                <AccordionItem value="billing-2">
                  <AccordionTrigger className="text-left">
                    ¿Qué tarjetas puedo usar para los pagos en línea?
                  </AccordionTrigger>
                  <AccordionContent>
                    Pago corriente: Todas las tarjetas Visa, MasterCard, Diners,
                    Discover y American Express de cualquier banco.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 3 */}
                <AccordionItem value="billing-3">
                  <AccordionTrigger className="text-left">
                    ¿El pago tiene algún costo adicional?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, los pagos electrónicos a través de Placetopay no generan
                    costos adicionales para el comprador.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 4 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    ¿Cuánto tiempo tengo para completar el pago?
                  </AccordionTrigger>
                  <AccordionContent>
                    Una vez que ingreses a Placetopay, tienes aproximadamente 15
                    minutos para completar la transacción antes de que la sesión
                    expire.
                  </AccordionContent>
                </AccordionItem>

                {/* FAQ Item 5 */}
                <AccordionItem value="billing-4">
                  <AccordionTrigger className="text-left">
                    ¿Recibiré factura?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sí, el comprobante de pago que recibes sirve como factura
                    electrónica de tu transacción.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
