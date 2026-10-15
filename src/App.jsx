import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Sidebar, { StepSelect } from './components/Sidebar.jsx'
import StepView from './components/StepView.jsx'
import Footer from './components/Footer.jsx'
import { GuideContext } from './GuideContext.js'
import { STEPS } from './data/steps.js'
import { probeStorage, loadState, saveState } from './lib/storage.js'

const VALID = new Set(STEPS.map((s) => s.id))

// 주소에서 현재 단계 읽기: #step-3 또는 ?step=3
function readLocation() {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  if (VALID.has(hash)) return hash
  const q = new URLSearchParams(window.location.search).get('step')
  if (q != null) {
    if (VALID.has('step-' + q)) return 'step-' + q
  }
  return null
}

export default function App() {
  const [storageOK] = useState(probeStorage)
  const [state, setState] = useState(loadState)
  const [current, setCurrent] = useState(() => readLocation() || 'step-0')
  const [toast, setToast] = useState(null)
  const headingRef = useRef(null)
  const focusNext = useRef(false)
  const toastTimer = useRef(null)

  // 저장 (배포 주소 기록만)
  useEffect(() => {
    if (storageOK) saveState(state)
  }, [state, storageOK])

  // 공유받은 단계 주소로 처음 열면 그 단계 본문이 보이게 스크롤 (초점은 옮기지 않음)
  useEffect(() => {
    if (readLocation()) document.getElementById('main')?.scrollIntoView({ block: 'start' })
  }, [])

  // 뒤로 가기·앞으로 가기·직접 주소 변경
  useEffect(() => {
    const onHash = () => {
      const loc = readLocation()
      if (loc) {
        focusNext.current = true
        setCurrent(loc)
      }
    }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('popstate', onHash)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('popstate', onHash)
    }
  }, [])

  // 이동 후 단계 제목으로 초점
  useEffect(() => {
    if (focusNext.current && headingRef.current) {
      headingRef.current.focus({ preventScroll: true })
      const main = document.getElementById('main')
      if (main) main.scrollIntoView({ block: 'start' })
      focusNext.current = false
    }
    const step = STEPS.find((s) => s.id === current)
    document.title = (step ? `${step.num}단계 ${step.title} · ` : '') + '지진 지도 만들기 연수'
  }, [current])

  const go = useCallback((id) => {
    if (!VALID.has(id)) return
    focusNext.current = true
    setCurrent(id)
    const url = new URL(window.location.href)
    url.searchParams.delete('step')
    url.hash = id
    if (window.location.href !== url.href) window.history.pushState(null, '', url.href)
  }, [])

  const announce = useCallback((msg, tone = 'ok') => {
    setToast({ msg, tone, key: Date.now() })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 5000)
  }, [])

  const setDeployUrl = useCallback(
    (url) => {
      setState((s) => ({ ...s, deployUrl: url }))
      announce(url ? '배포 주소를 이 브라우저에 기록했습니다.' : '배포 주소 기록을 지웠습니다.')
    },
    [announce],
  )

  const ctx = useMemo(
    () => ({ announce, deployUrl: state.deployUrl, setDeployUrl, storageOK }),
    [state.deployUrl, announce, setDeployUrl, storageOK],
  )

  return (
    <GuideContext.Provider value={ctx}>
      <a className="skip" href="#main">본문으로 건너뛰기</a>
      <Header onPrint={() => window.print()} />
      <div className="layout">
        <aside className="side">
          <Sidebar current={current} onGo={go} />
        </aside>
        <main id="main" className="content" tabIndex={-1}>
          <StepSelect current={current} onGo={go} />
          <div className="print-only print-intro">
            이 인쇄본에는 0~10단계 전체 안내, 모든 프롬프트, 막혔을 때 도움말이 포함되어 있습니다.
          </div>
          {STEPS.map((s) => (
            <StepView key={s.id} step={s} active={current === s.id} onGo={go} ref={headingRef} />
          ))}
          <Footer />
        </main>
      </div>
      <div className="toast-region" role="status" aria-live="polite">
        {toast && <div key={toast.key} className={'toast ' + toast.tone}>{toast.msg}</div>}
      </div>
    </GuideContext.Provider>
  )
}
