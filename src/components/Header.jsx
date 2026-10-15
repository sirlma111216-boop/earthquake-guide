import { COURSE } from '../data/course.js'

export default function Header({ onPrint }) {
  return (
    <header className="top">
      <div className="top-inner">
        <p className="guide-name">{COURSE.guideName}</p>
        <h1>
          {COURSE.title}
          <span className="subtitle">{COURSE.subtitle}</span>
        </h1>
        <ul className="badges" aria-label="연수 정보">
          <li>{COURSE.audience}</li>
          <li>{COURSE.noGenApi}</li>
          <li className="badge-route" aria-label={'진행 경로: ' + COURSE.route.join(', ')}>
            {COURSE.route.map((r, i) => (
              <span key={r}>{i > 0 && <span className="arrow" aria-hidden="true"> → </span>}{r}</span>
            ))}
          </li>
        </ul>
        <p className="result-line">{COURSE.result}</p>
        <p className="core-msg">{COURSE.coreMessage}</p>
        <div className="top-actions">
          <button type="button" className="btn btn-ghost" onClick={onPrint}>전체 안내 인쇄</button>
        </div>
      </div>
    </header>
  )
}
