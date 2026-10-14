import { forwardRef } from 'react'
import RichText from '../lib/RichText.jsx'
import PromptBlock from './PromptBlock.jsx'
import Collapsible from './Collapsible.jsx'
import Diagram from './Diagram.jsx'
import DeployUrl from './DeployUrl.jsx'
import { useGuide } from '../GuideContext.js'
import { PROMPTS, RECOVERY, NETLIFY_ERROR_TEMPLATE } from '../data/prompts.js'
import * as COURSE_DATA from '../data/course.js'
import { STEPS } from '../data/steps.js'
import { blockItemId, checklistId, STEP_CHECK_IDS, countDone } from '../lib/checks.js'

function CheckItem({ id, text, num }) {
  const { checks, toggle } = useGuide()
  const checked = !!checks[id]
  const inputId = 'chk-' + id.replace(/[^a-zA-Z0-9-]/g, '_')
  return (
    <li className={'check-item' + (checked ? ' is-done' : '')}>
      <input id={inputId} type="checkbox" checked={checked} onChange={() => toggle(id)} />
      <label htmlFor={inputId}>
        {num != null && <span className="check-num" aria-hidden="true">{num}</span>}
        <span className="check-text">
          <RichText text={text} />
        </span>
      </label>
    </li>
  )
}

function Table({ table }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (j === 0 ? <th key={j} scope="row"><RichText text={c} /></th> : <td key={j}><RichText text={c} /></td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Info({ b }) {
  const list = b.list || (b.listFrom ? COURSE_DATA[b.listFrom] : null)
  const ListTag = b.ordered ? 'ol' : 'ul'
  return (
    <section className={`info ${b.tone ? 'tone-' + b.tone : ''}`}>
      {b.title && <h3>{b.title}</h3>}
      {b.lead && <p className="lead"><RichText text={b.lead} /></p>}
      {b.paragraphs?.map((p, i) => <p key={i}><RichText text={p} /></p>)}
      {list && (
        <ListTag className="info-list">
          {list.map((t, i) => <li key={i}><RichText text={t} /></li>)}
        </ListTag>
      )}
      {b.table && <Table table={b.table} />}
      {b.after?.map((p, i) => <p key={'a' + i} className="after"><RichText text={p} /></p>)}
    </section>
  )
}

function Block({ step, b, bi }) {
  switch (b.type) {
    case 'actions':
    case 'try': {
      const title = b.title || (b.type === 'try' ? '앱에서 직접 눌러 볼 행동' : '따라 하기')
      return (
        <section className={`actions actions-${b.type}`}>
          <h3>
            {b.type === 'try' && <span className="tag tag-app">미리보기에서</span>}
            {title}
          </h3>
          <ol className="check-list">
            {b.items.map((t, i) => <CheckItem key={i} id={blockItemId(step, bi, i)} text={t} num={i + 1} />)}
          </ol>
        </section>
      )
    }
    case 'prompt': {
      const p = PROMPTS[b.id]
      return <PromptBlock label={p.label} title={p.title} where={b.where || p.where} text={p.text} />
    }
    case 'info':
      return <Info b={b} />
    case 'diagram':
      return <Diagram kind={b.kind} />
    case 'deployUrl':
      return <DeployUrl />
    case 'questions':
      return (
        <section className="info tone-question">
          <h3>{b.title}</h3>
          {b.items.map((q, i) => (
            <div key={i} className="question">
              <p className="q"><strong>Q{i + 1}.</strong> {q.q}</p>
              <Collapsible title="해설 보기" level="h4" className="answer">
                <p>{q.a}</p>
              </Collapsible>
            </div>
          ))}
        </section>
      )
    case 'collapse':
      return (
        <Collapsible title={b.title} className="optional">
          <p className="optional-note">필요한 경우에만 보는 보조 안내입니다. 진행률에는 포함되지 않습니다.</p>
          {b.blocks.map((inner, i) => <Info key={i} b={inner} />)}
        </Collapsible>
      )
    default:
      return null
  }
}

function Trouble({ step }) {
  return (
    <section className="trouble" aria-labelledby={`${step.id}-trouble`}>
      <h3 id={`${step.id}-trouble`}>막혔을 때</h3>
      <p className="muted">증상을 눌러 확인할 것과 해결 행동을 보세요. 비밀번호와 인증코드는 누구에게도 알려 주지 않습니다.</p>
      {step.trouble.map((t, i) => (
        <Collapsible key={i} title={t.symptom} className="trouble-item" level="h4">
          <dl className="trouble-dl">
            <dt>확인할 것</dt>
            <dd><ul>{t.check.map((c, j) => <li key={j}><RichText text={c} /></li>)}</ul></dd>
            <dt>해결 행동</dt>
            <dd><ol>{t.fix.map((c, j) => <li key={j}><RichText text={c} /></li>)}</ol></dd>
            <dt>복구 프롬프트</dt>
            <dd>
              {t.recovery ? (
                <PromptBlock
                  variant="recovery"
                  label="복구 프롬프트"
                  where="**같은 AI Studio 프로젝트의 대화 입력창** (새 앱을 만들지 않습니다)"
                  text={RECOVERY[t.recovery]}
                />
              ) : t.template ? (
                <PromptBlock
                  variant="recovery"
                  label="오류 해결 요청 양식"
                  where="빈칸을 채운 뒤 **같은 AI Studio 프로젝트의 대화 입력창**에 붙여 넣습니다. 비밀번호·토큰은 넣지 않습니다."
                  text={NETLIFY_ERROR_TEMPLATE}
                />
              ) : (
                <p className="muted">이 문제는 AI에게 코드를 고쳐 달라고 할 일이 아닙니다. 위 해결 행동을 따르고, 안 되면 강사에게 화면을 보여 주세요.</p>
              )}
            </dd>
          </dl>
        </Collapsible>
      ))}
    </section>
  )
}

const StepView = forwardRef(function StepView({ step, active, onGo }, headingRef) {
  const { checks } = useGuide()
  const idx = STEPS.indexOf(step)
  const prev = STEPS[idx - 1]
  const next = STEPS[idx + 1]
  const ids = STEP_CHECK_IDS[step.id]
  const done = countDone(ids, checks)

  return (
    <article id={step.id} className={'step' + (active ? ' is-active' : '')} aria-labelledby={`${step.id}-title`}>
      <header className="step-head">
        <div className="step-meta">
          <span className="step-num">{step.num}단계</span>
          <span className="step-time" title="권장 시간 — 생성·수정·로그인 상황에 따라 달라질 수 있습니다">권장 약 {step.minutes}분</span>
          <span className="step-count" aria-label={`이 단계 체크 ${ids.length}개 중 ${done}개 완료`}>
            체크 {done}/{ids.length}
          </span>
        </div>
        <h2 id={`${step.id}-title`} tabIndex={-1} ref={active ? headingRef : undefined}>
          {step.title}
        </h2>
        <div className="step-keys">
          <div className="key key-outcome">
            <span className="key-label">이 단계를 마치면</span>
            <p>{step.outcome}</p>
          </div>
          <div className="key key-where">
            <span className="key-label">지금 작업하는 곳</span>
            <p>{step.workplace}</p>
            {step.links?.length > 0 && (
              <p className="key-links">
                {step.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="chip-link">
                    {l.label} ↗<span className="sr-only"> (새 탭에서 열림)</span>
                  </a>
                ))}
              </p>
            )}
          </div>
        </div>
      </header>

      {step.blocks.map((b, bi) => <Block key={bi} step={step} b={b} bi={bi} />)}

      <section className="success">
        <h3><span className="tag tag-ok">정상</span> 제대로 되었을 때 보이는 결과</h3>
        <ul>{step.success.map((s, i) => <li key={i}><RichText text={s} /></li>)}</ul>
      </section>

      <section className="checklist">
        <h3>완료 체크리스트</h3>
        <p className="muted">외부 서비스의 작업은 이 페이지가 자동으로 확인하지 않습니다. 직접 확인한 항목만 체크하세요.</p>
        <ul className="check-list">
          {step.checklist.map((t, i) => <CheckItem key={i} id={checklistId(step, i)} text={t} />)}
        </ul>
      </section>

      <Trouble step={step} />

      <nav className="step-nav" aria-label="단계 이동">
        {prev ? (
          <button type="button" className="btn btn-ghost" onClick={() => onGo(prev.id)}>
            ← 이전: {prev.num}단계 {prev.title}
          </button>
        ) : <span />}
        {next ? (
          <button type="button" className="btn btn-primary" onClick={() => onGo(next.id)}>
            다음: {next.num}단계 {next.title} →
          </button>
        ) : (
          <span className="done-note">마지막 단계입니다. 완료 체크리스트를 확인하세요.</span>
        )}
      </nav>
    </article>
  )
})

export default StepView
