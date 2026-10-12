import { motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'

export default function Reveal({
  children,
  variants = fadeUp,
  index = 0,
  as = 'div',
  className = '',
  ...rest
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      custom={index}
      variants={variants}
      {...inViewProps}
      {...rest}
    >
      {children}
    </Component>
  )
}
