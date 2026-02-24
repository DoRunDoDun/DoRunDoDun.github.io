import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base는 GitHub 레포지토리 이름과 일치해야 합니다
export default defineConfig({
  plugins: [react()],
  base: '/',
})
