import { forwardRef } from 'react'
import Collapsible from './Collapsible.jsx'
import RichText from '../lib/RichText.jsx'
import { INSTRUCTOR, OPERATION_RULES, COURSE } from '../data/course.js'
import { useGuide } from '../GuideContext.js'

const InstructorView = forwardRef(function InstructorView({ active, onBack }, headingRef) {
  const { inst, toggleInst } = useGuide()
  const total = INSTRUCTOR.timeTable.reduce((n, r) => n + r[1], 0)
  const doneCount = INSTRUCTOR.preCheck.filter((_, i) => inst['pre:' + i]).length

  return (
    <article id="instructor" className={'step instructor' + (active ? ' is-active' : '')} aria-labelledby="instructor-title">
      <header className="step-head">
        <div className="step-meta">
          <span className="step-num inst">강사용</span>
        </div>
        <h2 id="instructor-title" tabIndex={-1} ref={active ? headingRef : undefined}>강사용 보기</h2>
        <p className="muted">
          참가자용 필수 과정과 분리된 영역입니다. 여기의 체크는 참가자 진행률에 포함되지 않습니다.
        </p>
        <p className="inst-notice"><RichText text={INSTRUCTOR.completion} /></p>
      </header>

      <Collapsible title={`연수 전 사전 점검 (${doneCount}/${INSTRUCTOR.preCheck.length})`} defaultOpen>
        <ul className="check-list">
          {INSTRUCTOR.preCheck.map((t, i) => {
            const id = 'inst-pre-' + i
            const checked = !!inst['pre:' + i]
            return (
              <li key={i} className={'check-item' + (checked ? ' is-done' : '')}>
                <input id={id} type="checkbox" checked={checked} onChange={() => toggleInst('pre:' + i)} />
                <label htmlFor={id}><span className="check-text">{t}</span></label>
              </li>
            )
          })}
        </ul>
      </Collapsible>

      <Collapsible title="시간 배분">
        <p className="muted">계정 준비를 제외한 권장 시간 합계: 약 {total}분. 생성·수정·로그인 상황에 따라 달라질 수 있습니다.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th scope="col">단계</th><th scope="col">권장</th><th scope="col">강사가 할 일</th></tr></thead>
            <tbody>
              {INSTRUCTOR.timeTable.map(([s, m, n]) => (
                <tr key={s}><th scope="row">{s}</th><td>{m}분</td><td>{n}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="시연 팁">
        <ul className="info-list">{INSTRUCTOR.demoTips.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>

      <Collapsible title="단계별 강사 메모">
        <dl className="inst-notes">
          {INSTRUCTOR.stepNotes.map(([s, n]) => (
            <div key={s}><dt>{s}</dt><dd>{n}</dd></div>
          ))}
        </dl>
      </Collapsible>

      <Collapsible title="연수 운영 원칙">
        <ul className="info-list">
          {OPERATION_RULES.map((t, i) => <li key={i}><RichText text={t} /></li>)}
          <li>강사가 모든 참가자의 API 결과 건수를 같게 맞추려고 하지 않습니다.</li>
          <li>지진이 적은 기간에도 수업할 수 있도록, “기대한 패턴이 보이지 않음”도 관찰 결과로 기록하게 합니다.</li>
        </ul>
      </Collapsible>

      <Collapsible title="예비 자료 (네트워크 장애 대비)">
        <ul className="info-list">{INSTRUCTOR.backupData.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>

      <Collapsible title="시간이 부족할 때 (연수 단축)">
        <ul className="info-list">{INSTRUCTOR.shorten.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </Collapsible>

      <p className="muted small">
        공식 문서·메뉴 확인 기준: {COURSE.docsCheckedOn}. USGS 데이터 주소 응답은 {COURSE.dataCheckedOn} 제작 시 직접 요청해 확인했습니다. 이후 메뉴와 서비스 조건이 달라질 수 있습니다.
      </p>

      <nav className="step-nav" aria-label="강사용 보기 나가기">
        <button type="button" className="btn btn-ghost" onClick={onBack}>← 참가자 안내로 돌아가기</button>
        <span />
      </nav>
    </article>
  )
})

export default InstructorView
