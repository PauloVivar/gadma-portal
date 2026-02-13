import { cn } from '@/sections/shared/lib/utils'

interface PlaceholderLogoProps {
  className?: string
}

export function PlaceholderLogo({ className }: PlaceholderLogoProps) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center gap-3">
        <img
          src="/azogues-futuro.svg"
          alt="Azogues Futuro"
          width={140}
          height={28}
          className="h-7 w-auto object-contain"
        />
      </div>
    </div>
  )
}
