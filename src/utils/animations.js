const ease = [0.25, 0.1, 0.25, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
}

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease },
  }),
}

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

export const slideInRight = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.4, ease } },
  exit: { x: '100%', transition: { duration: 0.3, ease } },
}

// Shared props for elements that animate in once when scrolled into view.
export const inViewProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
}
