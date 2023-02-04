import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const docsDirectory = join(process.cwd(), 'posts')
  const fullPath = join(docsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}
