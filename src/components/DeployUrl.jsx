import { useEffect, useState } from 'react'
import { useGuide } from '../GuideContext.js'

function validUrl(v) {
  try {
    const u = new URL(v)
    return u.protocol === 'https:'
  } catch {
    return false
  }
}

// 교사의 공개 주소 기록. 이 브라우저의 localStorage에만 저장되고 어디로도 전송하지 않는다.
export default function DeployUrl() {
  const { deployUrl, setDeployUrl, storageOK } = useGuide()
  const [draft, setDraft] = useState(deployUrl)
  useEffect(() => setDraft(deployUrl), [deployUrl])
  const trimmed = draft.trim()
  const ok = validUrl(trimmed)

  return (
    <section className="deploy-url">
      <h3>내 배포 주소</h3>
      <label htmlFor="deploy-url-input">Netlify 공개 사이트 주소 (예: https://내-사이트이름.netlify.app)</label>
      <div className="deploy-row">
        <input
          id="deploy-url-input"
          type="url"
          inputMode="url"
          autoComplete="off"
          spellCheck="false"
          placeholder="https://….netlify.app"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="button" className="btn btn-primary" disabled={trimmed !== '' && !ok} onClick={() => setDeployUrl(trimmed)}>
          기록
        </button>
      </div>
      {trimmed !== '' && !ok && <p className="field-msg warn">https:// 로 시작하는 주소를 입력하세요.</p>}
      {deployUrl && (
        <p className="field-msg">
          기록된 주소:{' '}
          <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="ext break">
            {deployUrl}
            <span className="sr-only"> (새 탭에서 열림)</span>
          </a>
          {deployUrl.includes('app.netlify.com') && (
            <span className="warn-inline"> — 이 주소는 관리 화면입니다. …netlify.app 으로 끝나는 공개 주소를 기록하세요.</span>
          )}
        </p>
      )}
      <p className="muted small">
        이 값은 지금 쓰는 브라우저에만 저장되며 어디로도 전송되지 않습니다. 다른 기기에서는 보이지 않습니다.
        {!storageOK && ' (현재 브라우저가 저장을 막고 있어 새로고침하면 사라집니다.)'}
      </p>
    </section>
  )
}
