import { Logo } from '@/sections/shared/components/pro-blocks/logo'
import { Separator } from '@/sections/shared/components/ui-custom/separator'

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <a href="/" aria-label="Go to homepage">
            <Logo />
          </a>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <a
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Posts
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Primeros Pasos
            </a>
            {/* <a
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a> */}
            {/* <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a> */}
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-12 text-sm lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left">
            Built with passion by{' '}
            <a
              href="https://enlinea.azogues.gob.ec/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vivaring Corp
            </a>
            . All rights reserved.
          </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Legal links"
          >
            <a
              href="https://enlinea.azogues.gob.ec/legal/politica-de-proteccion-de-datos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy and Terms of Service
            </a>
            <a
              href="https://enlinea.azogues.gob.ec/legal/acuerdo-de-responsabilidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Liability Agreement
            </a>
            <a
              href="https://www.shadcndesign.com/pro-blocks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
