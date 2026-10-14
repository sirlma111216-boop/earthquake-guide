// localStorage 래퍼. 저장이 막힌 브라우저(사생활 보호 모드 등)에서도 예외 없이 동작한다.
const KEY = 'eq-guide-v1'

const EMPTY = { checks: {}, inst: {}, last: null, deployUrl: '' }

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
    return {
      checks: parsed.checks && typeof parsed.checks === 'object' ? parsed.checks : {},
      inst: parsed.inst && typeof parsed.inst === 'object' ? parsed.inst : {},
      last: typeof parsed.last === 'string' ? parsed.last : null,
      deployUrl: typeof parsed.deployUrl === 'string' ? parsed.deployUrl : '',
    }
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

export function clearState() {
  try {
    window.localStorage.removeItem(KEY)
  } catch {
    /* 저장소 접근이 막힌 경우 메모리 상태만 비운다 */
  }
  return { ...EMPTY }
}
