import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  // 연수 화면 캡처를 번들 안에 넣어, 합친 HTML 파일 하나로도 이미지가 보이게 한다.
  build: { assetsInlineLimit: 1024 * 1024 },
})
