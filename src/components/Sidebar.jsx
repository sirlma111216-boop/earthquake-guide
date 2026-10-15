import { STEPS } from '../data/steps.js'

export function StepSelect({ current, onGo }) {
  return (
    <div className="step-select">
      <label htmlFor="step-select">단계 선택</label>
      <select id="step-select" value={current} onChange={(e) => onGo(e.target.value)}>
        {STEPS.map((s) => (
          <option key={s.id} value={s.id}>
            {s.num}단계 · {s.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Sidebar({ current, onGo }) {
  return (
    <nav className="sidebar" aria-label="단계 목차">
      <p className="sidebar-title">단계 목차</p>
      <ol className="toc">
        {STEPS.map((s) => (
          <li key={s.id}>
            <a
              href={'#' + s.id}
              className={'toc-link' + (current === s.id ? ' is-current' : '')}
              aria-current={current === s.id ? 'step' : undefined}
              onClick={(e) => {
                e.preventDefault()
                onGo(s.id)
              }}
            >
              <span className="toc-num" aria-hidden="true">{s.num}</span>
              <span className="toc-text">
                <span className="toc-title">{s.title}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
