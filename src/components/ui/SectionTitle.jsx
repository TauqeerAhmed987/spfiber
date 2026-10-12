import Reveal from './Reveal'

export default function SectionTitle({
  tag,
  title,
  desc,
  align = 'center',
  light = false,
  className = '',
}) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'text-center mx-auto' : 'text-left'} ${className}`}
    >
      {tag && (
        <Reveal index={0}>
          <span className="inline-block text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 underline underline-offset-4 decoration-2">
            {tag}
          </span>
        </Reveal>
      )}
      {title && (
        <Reveal index={1}>
          <h2
            className={`text-[28px] sm:text-[34px] md:text-[42px] font-semibold leading-tight mb-4 ${light ? 'text-white' : 'text-heading'}`}
          >
            {title}
          </h2>
        </Reveal>
      )}
      {desc && (
        <Reveal index={2}>
          <p
            className={`text-base leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}
          >
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  )
}
