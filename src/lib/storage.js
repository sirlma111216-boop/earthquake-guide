// localStorage 래퍼. 저장이 막힌 브라우저(사생활 보호 모드 등)에서도 예외 없이 동작한다.
// 저장하는 것은 교사가 기록한 배포 주소 하나뿐이다.
const KEY = 'eq-guide-v1'

const EMPTY = { deployUrl: '' }

export function probeStorage() {
  try {
    const k = KEY + ':probe'
    window.localStorage.setItem(k, '1')
    window.localStorage.removeItem(k)
    return true
  } catch {
    return false
  }
}

export function loadState() {
  try {
    const raw = window.localStorage.getItem(KEY)
    if (!raw) return { ...EMPTY }
    const parsed = JSON.parse(raw)
    return { deployUrl: typeof parsed.deployUrl === 'string' ? parsed.deployUrl : '' }
  } catch {
    return { ...EMPTY }
  }
}

export function saveState(state) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state))
    return true
  } catch {
    return false
  }
}
