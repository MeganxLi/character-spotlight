import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import pkg from './package.json'

const resolveRepoName = () => {
  const fromGithub = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.GITHUB_REPOSITORY?.split('/')[1]
  const { homepage } = (pkg as { homepage?: string })
  const fromHomepage = typeof homepage === 'string'
    ? homepage.split('/').filter(Boolean).pop()
    : undefined

  return fromGithub || fromHomepage || pkg.name
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const repoName = resolveRepoName()
  const base = command === 'serve' ? '/' : `/${repoName}/`

  return {
    plugins: [react()],
    base,
  }
})
