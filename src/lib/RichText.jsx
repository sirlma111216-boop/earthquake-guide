import { Fragment } from 'react'
import Term from '../components/Term.jsx'

// 본문 표기: **굵게**, `코드`, [글자](주소), {{용어}} 또는 {{표시|용어}}
// innerHTML을 쓰지 않고 React 요소로만 만든다.
const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\{\{[^}]+\}\})/g

export default function RichText({ text }) {
  if (text == null) return null
  const parts = String(text).split(TOKEN)
  return parts.map((part, i) => {
    if (!part) return null
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}><RichText text={part.slice(2, -2)} /></strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>
    }
    if (part.startsWith('{{') && part.endsWith('}}')) {
      const [shown, key] = part.slice(2, -2).split('|')
      return <Term key={i} label={shown} termKey={key || shown} />
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      return (
        <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer" className="ext">
          {link[1]}
          <span className="sr-only"> (새 탭에서 열림)</span>
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
