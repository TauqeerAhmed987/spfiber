import Reveal from '../ui/Reveal'

function Paragraphs({ items, keyPrefix = '' }) {
  return items?.map((text, i) => (
    <p key={`${keyPrefix}${i}`} className="text-body leading-relaxed mb-3">
      {text}
    </p>
  ))
}

export default function PolicyContent({ sections }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <Reveal key={i} index={i % 4}>
              {section.heading && (
                <h3 className="font-heading font-semibold text-xl text-heading mb-3">
                  {section.heading}
                </h3>
              )}
              <Paragraphs items={section.paragraphs} />
              {section.list && (
                <ul className="space-y-2 mb-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-body leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <Paragraphs items={section.paragraphsAfter} keyPrefix="after-" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
