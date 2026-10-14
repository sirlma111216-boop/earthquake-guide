import { useId, useState } from 'react'

// 화면에서는 접고 펼치며, 인쇄할 때는 항상 펼쳐진다(.collapse-body는 print CSS에서 표시).
export default function Collapsible({ title, children, className = '', defaultOpen = false, level = 'h3' }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const H = level
  return (
    <div className={`collapse ${open ? 'is-open' : ''} ${className}`}>
      <H className="collapse-head">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          <span className="collapse-icon" aria-hidden="true">{open ? '−' : '+'}</span>
          <span>{title}</span>
        </button>
      </H>
      <div id={id} className="collapse-body" role="region" aria-label={typeof title === 'string' ? title : undefined}>
        {children}
      </div>
    </div>
  )
}
