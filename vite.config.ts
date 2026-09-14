import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, type Connect, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const LEGAL_SLUGS = ['mentions-legales', 'confidentialite', 'cgu'] as const

function legalPagesMiddleware(publicDir: string): Connect.NextHandleFunction {
  return (req, res, next) => {
    const pathname = (req.url ?? '/').split('?')[0]
    const match = pathname.match(/^\/(mentions-legales|confidentialite|cgu)\/?$/)
    if (!match) {
      return next()
    }

    const filePath = path.join(publicDir, match[1], 'index.html')
    if (!fs.existsSync(filePath)) {
      return next()
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(fs.readFileSync(filePath))
  }
}

function legalPagesPlugin(): Plugin {
  let publicDir = 'public'

  return {
    name: 'legal-pages-middleware',
    configResolved(config) {
      publicDir = config.publicDir
    },
    configureServer(server) {
      server.middlewares.use(legalPagesMiddleware(publicDir))
    },
    configurePreviewServer(server) {
      server.middlewares.use(legalPagesMiddleware(publicDir))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), legalPagesPlugin()],
})
