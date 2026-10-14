import { STEPS } from '../data/steps.js'
import { STEP_CHECK_IDS, countDone } from '../lib/checks.js'
import { useGuide } from '../GuideContext.js'

export function StepSelect({ current, onGo }) {
  return (
    <div className="step-select">
      <label htmlFor="step-select">단계 선택</label>
      <select id="step-select" value={current} onChange={(e) => onGo(e.target.value)}>
        {STEPS.map((s) => (
          <option key={s.id} value={s.id}>
            {s.num}단계 · {s.title} (약 {s.minutes}분)
          </option>
        ))}
        <option value="instructor">강사용 보기</option>
      </select>
    </div>
  )
}

export default function Sidebar({ current, onGo }) {
  const { checks } = useGuide()
  return (
    <nav className="sidebar" aria-label="단계 목차">
      <p className="sidebar-title">단계 목차</p>
      <ol className="toc">
        {STEPS.map((s) => {
          const ids = STEP_CHECK_IDS[s.id]
          const done = countDone(ids, checks)
          const complete = done === ids.length
          return (
            <li key={s.id}>
              <a
                href={'#' + s.id}
                className={'toc-link' + (current === s.id ? ' is-current' : '') + (complete ? ' is-complete' : '')}
                aria-current={current === s.id ? 'step' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  onGo(s.id)
                }}
              >
                <span className="toc-num" aria-hidden="true">{complete ? '✓' : s.num}</span>
                <span className="toc-text">
                  <span className="toc-title">{s.title}</span>
                  <span className="toc-sub">
                    약 {s.minutes}분 · {done}/{ids.length}
                    {complete && <span className="sr-only"> 완료</span>}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ol>
      <a
        href="#instructor"
        className={'toc-link toc-inst' + (current === 'instructor' ? ' is-current' : '')}
        onClick={(e) => {
          e.preventDefault()
          onGo('instructor')
        }}
      >
        <span className="toc-num" aria-hidden="true">★</span>
        <span className="toc-text">
          <span className="toc-title">강사용 보기</span>
          <span className="toc-sub">사전 점검 · 시간 배분 · 시연 팁</span>
        </span>
      </a>
    </nav>
  )
}
