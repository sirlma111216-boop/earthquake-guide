import { useState } from 'react'
import RichText from '../lib/RichText.jsx'
import { AISTUDIO_SHOTS, GITHUB_SHOTS, NETLIFY_SHOTS, SCREENSHOT_NOTE } from '../data/screenshots.js'

// 실제 서비스 화면을 흉내 낸 그림이 아니라 구조를 설명하는 단순 도식이다. (AI Studio는 강사가 캡처한 실제 화면)
const SCREEN_NOTE = '화면 구조 예시 — 실제 메뉴 위치는 달라질 수 있음'

// 실제 화면 캡처 위에 번호를 얹고, 아래에 번호별 설명을 붙인다.
function Shot({ shot }) {
  const [zoom, setZoom] = useState(false)
  return (
    <div className="shot">
      <h4 className="shot-title">{shot.title}</h4>
      {shot.terms && (
        <div className="shot-terms">
          <p className="shot-terms-title">먼저 알아 둘 용어</p>
          <dl>
            {shot.terms.map(([t, d]) => (
              <div key={t}><dt>{t}</dt><dd>{d}</dd></div>
            ))}
          </dl>
        </div>
      )}
      <div className={'shot-frame' + (zoom ? ' is-zoom' : '')} style={{ maxWidth: zoom ? undefined : shot.width + 2 }}>
        <div className="shot-inner" style={zoom ? { width: shot.width } : undefined}>
          <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} />
          {shot.marks.map((m) => (
            <span key={m.n} className="shot-mark" style={{ left: m.x + '%', top: m.y + '%' }} aria-hidden="true">{m.n}</span>
          ))}
        </div>
      </div>
      {shot.width > 800 && (
        <button type="button" className="btn btn-ghost shot-zoom" aria-pressed={zoom} onClick={() => setZoom((v) => !v)}>
          {zoom ? '화면에 맞추기' : '원래 크기로 크게 보기'}
        </button>
      )}
      <ol className="shot-legend">
        {shot.marks.map((m) => (
          <li key={m.n}>
            <span className="shot-legend-num" aria-hidden="true">{m.n}</span>
            <span><RichText text={m.text} /></span>
          </li>
        ))}
      </ol>
      {shot.note && <p className="shot-note">{shot.note}</p>}
    </div>
  )
}

function Figure({ caption, note = SCREEN_NOTE, children, label }) {
  return (
    <figure className="diagram" aria-label={label}>
      <div className="diagram-note">{note}</div>
      {children}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default function Diagram({ kind }) {
  if (kind === 'flow') {
    const nodes = [
      ['Google AI Studio', '자연어로 앱 코드를 만든다'],
      ['GitHub', '원본 파일과 변경 기록을 보관한다'],
      ['Netlify', '빌드해서 공개 주소로 배포한다'],
      ['공개 주소', '…netlify.app 에서 누구나 연다'],
    ]
    return (
      <Figure note="진행 흐름 도식" caption="완성된 앱은 AI를 부르지 않고, USGS 공개 데이터를 직접 읽어 지도에 표시합니다." label="진행 흐름: AI Studio에서 GitHub, Netlify를 거쳐 공개 주소로">
        <ol className="flow">
          {nodes.map(([t, d], i) => (
            <li key={t} className="flow-node">
              <span className="flow-num">{i + 1}</span>
              <strong>{t}</strong>
              <span>{d}</span>
            </li>
          ))}
        </ol>
        <div className="flow-data">
          <span className="flow-data-tag">앱이 읽는 자료</span> USGS 지진 피드 · USGS 판 경계 · OpenStreetMap 지도 타일
        </div>
      </Figure>
    )
  }

  if (kind === 'aistudio') {
    return (
      <Figure
        note={SCREENSHOT_NOTE}
        caption="첫 프롬프트는 화면 ①의 새 앱 입력창에, 2단계부터는 화면 ②의 왼쪽 아래 입력창(같은 프로젝트)에 넣습니다."
        label="Google AI Studio 시작 화면과 프로젝트 화면 캡처"
      >
        {AISTUDIO_SHOTS.map((shot) => <Shot key={shot.title} shot={shot} />)}
      </Figure>
    )
  }

  if (kind === 'github') {
    return (
      <Figure
        note={SCREENSHOT_NOTE.replace('Google AI Studio', 'Google AI Studio·GitHub')}
        caption="처음 한 번만 1)~6)을 거칩니다. 그다음부터는 GitHub 탭에서 7) Push changes to GitHub만 누르면 됩니다."
        label="AI Studio에서 GitHub로 저장하는 화면 캡처 8장"
      >
        {GITHUB_SHOTS.map((shot) => <Shot key={shot.title} shot={shot} />)}
      </Figure>
    )
  }

  if (kind === 'netlifyShots') {
    return (
      <Figure
        note={SCREENSHOT_NOTE.replace('Google AI Studio', 'Netlify·GitHub')}
        caption="처음 한 번만 1)~9)를 거칩니다. 이후에는 AI Studio에서 고치고 GitHub에 푸시하면 Netlify가 같은 주소로 자동으로 다시 배포합니다."
        label="Netlify 배포 과정 화면 캡처 9장"
      >
        {NETLIFY_SHOTS.map((shot) => <Shot key={shot.title} shot={shot} />)}
      </Figure>
    )
  }

  if (kind === 'repo') {
    return (
      <Figure note="저장소 구조 예시 — 실제 파일 이름은 AI가 만든 코드에 따라 다를 수 있음" caption="package.json이 저장소 최상위에 보여야 Netlify 기준 폴더를 비워 둘 수 있습니다." label="GitHub 저장소 폴더 구조 예시">
        <div className="repo-compare">
          <div className="repo good">
            <div className="repo-title">✓ 바로 배포 가능</div>
            <pre className="tree">{`earthquake-map/
├─ package.json
├─ index.html
├─ vite.config.(js|ts)
├─ netlify.toml
└─ src/`}</pre>
          </div>
          <div className="repo warn">
            <div className="repo-title">△ 기준 폴더 설정 필요</div>
            <pre className="tree">{`earthquake-map/
└─ my-app/
   ├─ package.json
   ├─ index.html
   └─ src/`}</pre>
          </div>
        </div>
      </Figure>
    )
  }

  if (kind === 'netlify') {
    return (
      <Figure caption="이름이 조금 달라도 같은 목적의 칸을 찾으세요." label="Netlify 빌드 설정 화면 구조 예시">
        <div className="mock">
          <div className="mock-bar">
            <span className="mock-chip">저장소 선택 → 빌드 설정 → 배포</span>
          </div>
          <dl className="mock-form">
            <div><dt>Branch to deploy</dt><dd>main (기본 브랜치)</dd></div>
            <div><dt>Base directory</dt><dd className="empty">(비워 둠)</dd></div>
            <div><dt>Build command</dt><dd>npm run build</dd></div>
            <div><dt>Publish directory</dt><dd>dist</dd></div>
          </dl>
          <div className="mock-deploy">Deploy 버튼</div>
        </div>
      </Figure>
    )
  }
  return null
}
