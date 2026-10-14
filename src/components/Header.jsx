import { COURSE } from '../data/course.js'

export default function Header({ percent, done, total, storageOK, onStart, onResume, onPrint, onReset }) {
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
          <li title="계정 준비 제외 · 생성·수정·로그인 상황에 따라 달라질 수 있음">{COURSE.duration}</li>
          <li>{COURSE.noGenApi}</li>
          <li className="badge-route" aria-label={'진행 경로: ' + COURSE.route.join(', ')}>
            {COURSE.route.map((r, i) => (
              <span key={r}>{i > 0 && <span className="arrow" aria-hidden="true"> → </span>}{r}</span>
            ))}
          </li>
        </ul>
        <p className="result-line">{COURSE.result}</p>
        <p className="core-msg">{COURSE.coreMessage}</p>
        <div className="progress-row">
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-label="전체 진행률">
            <div className="progress-bar" style={{ width: percent + '%' }} />
          </div>
          <span className="progress-text">
            전체 진행률 <strong>{percent}%</strong> <span className="muted">({done}/{total} 항목)</span>
          </span>
        </div>
        <div className="top-actions">
          <button type="button" className="btn btn-primary" onClick={onStart}>처음부터 시작</button>
          <button type="button" className="btn btn-secondary" onClick={onResume}>이어서 하기</button>
          <button type="button" className="btn btn-ghost" onClick={onPrint}>전체 안내 인쇄</button>
          <button type="button" className="btn btn-text" onClick={onReset}>진행 기록 초기화</button>
        </div>
        <p className="storage-note">
          {storageOK
            ? '체크 기록은 이 브라우저에만 저장됩니다. 다른 기기나 다른 브라우저로 자동 동기화되지 않습니다.'
            : '이 브라우저는 저장을 막고 있어 체크 기록이 새로고침 후 유지되지 않습니다. 안내 읽기와 단계 이동은 그대로 할 수 있습니다.'}
          {' '}단계별 시간은 권장 시간이며 생성·수정·로그인 상황에 따라 달라질 수 있습니다.
        </p>
      </div>
    </header>
  )
}
