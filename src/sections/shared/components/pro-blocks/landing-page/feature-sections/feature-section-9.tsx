import {
  Bot,
  Plug,
  BarChart3,
  TextSearch,
  MailCheck,
  KeySquare,
  FileCheck,
  BetweenHorizontalStart
} from 'lucide-react'
import { Tagline } from '@/sections/shared/components/pro-blocks/landing-page/tagline'

export function FeatureSection9() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="how-it-works"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline className="bg-red-300">
            Pasos para el Registro Ciudadano
          </Tagline>
          <h2 className="heading-lg text-foreground">
            Registrate en 5 minutos
          </h2>
          <p className="text-muted-foreground text-base">
            El Registro Ciudadano en enlinea.azogues es un proceso seguro y
            validado que te permitirá acceder a trámites, consultas y pagos
            municipales en línea. La activación de tu cuenta se realiza en un
            plazo de 24 a 48 horas, una vez verificada la información.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Plug className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 1. Selección del tipo de registro
              </h3>
              <p className="text-muted-foreground">
                Selecciona el tipo de Registro Ciudadano correspondiente y
                acepta el Acuerdo de Responsabilidad, la Política de Privacidad
                y los Términos y Condiciones, en cumplimiento con la normativa
                vigente de protección de datos.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <FileCheck className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 2. Carga de documentos
              </h3>
              <p className="text-muted-foreground">
                Adjunta correctamente los documentos requeridos: Selfie con tu
                documento de identidad (formato imagen). Documento de identidad
                (cédula o pasaporte) escaneado, legible y en formato PDF. En
                caso de poseer RUC, adjunta el documento actualizado en formato
                PDF.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <BetweenHorizontalStart className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 3: Datos personales
              </h3>
              <p className="text-muted-foreground">
                Ingresa tus datos personales exactamente como constan en tu
                documento de identidad: nombres, apellidos, fecha de nacimiento
                y demás información solicitada.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <TextSearch className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 4: Dirección de residencia
              </h3>
              <p className="text-muted-foreground">
                Registra tu dirección completa, detallando: Calle principal
                Calle secundaria Número de casa o departamento (si aplica)
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <MailCheck className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 5: Verificación de correo electrónico
              </h3>
              <p className="text-muted-foreground">
                Ingresa un correo electrónico activo para realizar el proceso de
                verificación y recibir notificaciones oficiales.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <KeySquare className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">
                Paso 6: Creación de contraseña
              </h3>
              <p className="text-muted-foreground">
                Define una contraseña segura para proteger tu cuenta y
                garantizar la confidencialidad de tu información.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
