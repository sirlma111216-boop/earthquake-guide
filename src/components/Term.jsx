import { useId, useState } from 'react'
import { GLOSSARY } from '../data/course.js'

// 용어가 처음 등장하는 자리에서 쉬운 설명을 펼쳐 보인다. 인쇄할 때는 항상 펼쳐진다.
export default function Term({ label, termKey }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const def = GLOSSARY[termKey]
  if (!def) return <>{label}</>
  return (
    <span className={'term' + (open ? ' is-open' : '')}>
      <button
        type="button"
        className="term-btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        title="용어 설명 보기"
      >
        {label}
        <span className="term-mark" aria-hidden="true">?</span>
        <span className="sr-only"> 용어 설명</span>
      </button>
      <span id={id} className="term-def" role="note">
        <strong>{termKey}</strong> — {def}
      </span>
    </span>
  )
}
