// 콘텐츠 점검: npm run check
// 단계 구성 누락, 없는 프롬프트 참조, 자리표시 문구, 용어 첫 등장 여부를 확인한다.
import { STEPS } from '../src/data/steps.js'
import { PROMPTS, RECOVERY } from '../src/data/prompts.js'
import * as COURSE from '../src/data/course.js'

const errors = []
const fail = (m) => errors.push(m)

if (STEPS.length !== 11) fail(`단계 수가 11이 아님: ${STEPS.length}`)
STEPS.forEach((s, i) => {
  if (s.num !== i) fail(`${s.id}: 번호 순서 오류`)
  for (const k of ['title', 'outcome', 'workplace']) if (!s[k]) fail(`${s.id}: ${k} 없음`)
  if (!s.blocks.some((b) => b.type === 'actions')) fail(`${s.id}: 따라 하기 없음`)
  if (!s.success?.length) fail(`${s.id}: 정상 결과 없음`)
  if (!s.checklist?.length) fail(`${s.id}: 완료 체크리스트 없음`)
  if (!s.trouble?.length) fail(`${s.id}: 막혔을 때 없음`)
  s.trouble.forEach((t) => {
    if (!t.symptom || !t.check?.length || !t.fix?.length) fail(`${s.id}: 도움말 구성 누락 (${t.symptom})`)
    if (t.recovery && !RECOVERY[t.recovery]) fail(`${s.id}: 복구 프롬프트 ${t.recovery} 없음`)
  })
  s.blocks.forEach((b) => {
    if (b.type === 'prompt' && !PROMPTS[b.id]) fail(`${s.id}: 프롬프트 ${b.id} 없음`)
    if (b.listFrom && !COURSE[b.listFrom]) fail(`${s.id}: 목록 ${b.listFrom} 없음`)
  })
})

const used = STEPS.flatMap((s) => s.blocks.filter((b) => b.type === 'prompt').map((b) => b.id))
for (let n = 1; n <= 9; n++) {
  const id = 'p0' + n
  if (!used.includes(id)) fail(`프롬프트 ${id}가 어느 단계에도 없음`)
}

const all = JSON.stringify({ STEPS, PROMPTS, RECOVERY, COURSE })
for (const bad of ['TODO', '여기에 설명 추가', '프롬프트 입력 예정', 'lorem', 'FIXME']) {
  if (all.toLowerCase().includes(bad.toLowerCase())) fail(`자리표시 문구 발견: ${bad}`)
}
for (const term of Object.keys(COURSE.GLOSSARY)) {
  const n = all.split(`{{${term}}}`).length - 1
  if (n === 0) fail(`용어 설명 위치 없음: ${term}`)
  if (n > 1) fail(`용어 설명이 ${n}번 붙음(첫 등장에만): ${term}`)
}

console.log(`단계 ${STEPS.length}개 · 프롬프트 ${Object.keys(PROMPTS).length}개 · 복구 프롬프트 ${Object.keys(RECOVERY).length}개`)
if (errors.length) {
  console.error('점검 실패:\n- ' + errors.join('\n- '))
  process.exit(1)
}
console.log('콘텐츠 점검 통과')
