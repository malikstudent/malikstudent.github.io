import { forwardRef } from 'react'

const variantClasses = {
  primary:
    'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-primary',
  secondary:
    'border border-slate-200 bg-white text-secondary hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-primary',
  ghost:
    'bg-transparent text-secondary hover:bg-slate-100 focus-visible:outline-primary',
}

const sizeClasses = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-sm',
  lg: 'h-14 px-6 text-base',
}

const Button = forwardRef(function Button(
  { as: Component = 'button', variant = 'primary', size = 'md', className = '', ...props },
  ref,
) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component ref={ref} className={classes} {...props} />
})

export default Button