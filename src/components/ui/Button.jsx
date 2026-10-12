import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'

const variants = {
  primary: 'bg-primary text-white hover:bg-dark shadow-button',
  dark: 'bg-dark text-white hover:bg-primary',
  outline:
    'bg-transparent text-heading border border-heading/20 hover:bg-dark hover:text-white hover:border-dark',
  white: 'bg-white text-dark hover:bg-primary hover:text-white',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon = true,
  className = '',
  type = 'button',
}) {
  const classes = `group inline-flex items-center justify-center gap-2 font-semibold text-sm md:text-[15px] px-7 py-3.5 md:px-8 md:py-4 rounded-md transition-all duration-300 ease-out hover:-translate-y-1 whitespace-nowrap ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
