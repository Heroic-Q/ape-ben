import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { loadEnv } from 'vite'

export default ({ mode }) => {
  let env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~': path.resolve(__dirname, './')
      }
    },
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: env.VITE_SERVER_API,
          changeOrigin: true,
          cookieDomainRewrite: '',
          secure: false
        }
      }
    }
  })
}
