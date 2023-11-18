import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  theme?: 'default' | 'transparent'
  iconOnly?: boolean
}

const Button = ({
  children,
  theme = 'default',
  iconOnly = false,
  className,
  ...props
}: Props) => {
  const cn = clsx(
    'px-5 py-[15px] rounded-[15px] text-xl hover:text-shadow hover:shadow-arzky-navylight',
    {
      'bg-arzky-navy text-white hover:bg-arzky-primary2': theme === 'default',
      'bg-transparent text-arzky-navy hover:text-arzky-navylight rounded-full ':
        theme === 'transparent',
      '!p-[10px]': iconOnly
    },
    className
  )
  return (
    <button {...props} className={cn}>
      {children}
    </button>
  )
}

export default Button
