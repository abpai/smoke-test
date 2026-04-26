import { readFileSync } from 'node:fs'

const text = readFileSync('SMOKE_TEST_TASK.md', 'utf8')
if (!/^current_count=\d+\n?$/.test(text)) {
  console.error('SMOKE_TEST_TASK.md must contain exactly current_count=<integer>')
  process.exit(1)
}

