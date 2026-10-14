import { STEPS } from '../data/steps.js'

// 단계마다 체크 항목 id 목록을 만든다. 진행률은 이 목록의 실제 개수로 계산한다.
export function checkIdsForStep(step) {
  const ids = []
  step.blocks.forEach((b, bi) => {
    if (b.type === 'actions' || b.type === 'try') {
      b.items.forEach((_, i) => ids.push(blockItemId(step, bi, i)))
    }
  })
  step.checklist.forEach((_, i) => ids.push(checklistId(step, i)))
  return ids
}

export const blockItemId = (step, bi, i) => `${step.id}:b${bi}:${i}`
export const checklistId = (step, i) => `${step.id}:c:${i}`

export const STEP_CHECK_IDS = Object.fromEntries(STEPS.map((s) => [s.id, checkIdsForStep(s)]))
export const ALL_CHECK_IDS = Object.values(STEP_CHECK_IDS).flat()

export function countDone(ids, checks) {
  return ids.reduce((n, id) => n + (checks[id] ? 1 : 0), 0)
}
