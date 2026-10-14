import { useRef, useState } from 'react'
import { copyText, selectElementText } from '../lib/clipboard.js'
import { useGuide } from '../GuideContext.js'
import RichText from '../lib/RichText.jsx'

// 프롬프트 본문만 복사한다. 제목·안내문은 복사 대상에 넣지 않는다.
export default function PromptBlock({ label, title, where, text, variant = 'main' }) {
  const preRef = useRef(null)
  const [status, setStatus] = useState(null) // 'ok' | 'fail' | null
  const { announce } = useGuide()

  async function onCopy() {
    const ok = await copyText(text)
    if (ok) {
      setStatus('ok')
      announce(`${label} 전체를 복사했습니다. 붙여 넣을 곳에서 Ctrl+V(⌘+V)를 누르세요.`)
    } else {
      setStatus('fail')
      selectElementText(preRef.current)
      announce('자동 복사가 막혔습니다. 프롬프트 글자를 선택해 두었으니 Ctrl+C(⌘+C)로 복사하세요.', 'warn')
    }
  }

  return (
    <section className={`prompt prompt-${variant}`} aria-label={`${label} ${title || ''}`}>
      <div className="prompt-head">
        <div className="prompt-titles">
          <span className="prompt-label">{label}</span>
          {title && <span className="prompt-title">{title}</span>}
        </div>
        <button type="button" className="btn btn-copy" onClick={onCopy}>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
          전체 복사
        </button>
      </div>
      {where && (
        <p className="prompt-where">
          <span className="prompt-where-tag">붙여 넣을 곳</span> <RichText text={where} />
        </p>
      )}
      <pre ref={preRef} className="prompt-text" tabIndex={0} aria-label={`${label} 본문`}>
        {text}
      </pre>
      <p className={`copy-status ${status || ''}`}>
        {status === 'ok' && '✓ 복사했습니다. 붙여 넣을 곳에서 Ctrl+V(⌘+V)를 누르세요.'}
        {status === 'fail' &&
          '자동 복사가 브라우저에서 막혔습니다. 위 프롬프트 글자를 선택해 두었습니다. Ctrl+C(⌘+C)를 누르거나, 마우스로 처음부터 끝까지 끌어 선택한 뒤 복사하세요.'}
      </p>
    </section>
  )
}
