import React from 'react'
interface LogoProps {
  width?: number
  height?: number
  className?: string
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/public/azogues-alcaldia.svg"
        alt="Azogues Alcaldía"
        width={135}
        height={36}
        className="text-foreground w-[120px] h-[32px] md:w-[135px] md:h-[36px]"
      />
    </div>
  )
}
