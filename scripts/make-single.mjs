// dist/의 빌드 결과를 HTML 파일 하나로 합친다. 더블클릭으로 바로 열 수 있다.
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
let html = readFileSync(join(dist, 'index.html'), 'utf8')

const js = html.match(/<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/)
const css = html.match(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/)
if (!js || !css) throw new Error('dist/index.html에서 스크립트나 스타일 태그를 찾지 못함')

const jsCode = readFileSync(join(dist, js[1]), 'utf8').replace(/<\/script/gi, '<\\/script')
const cssCode = readFileSync(join(dist, css[1]), 'utf8')

html = html.replace(css[0], () => `<style>${cssCode}</style>`)
html = html.replace(js[0], () => '')
html = html.replace('</body>', () => `<script type="module">${jsCode}</script>\n</body>`)

const out = '지진지도연수-안내.html'
writeFileSync(out, html)
console.log(`${out} 생성 (${Math.round(html.length / 1024)}KB)`)
