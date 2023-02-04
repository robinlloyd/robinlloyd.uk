import fs from 'fs'
import { join } from 'path'
import { getDocBySlug } from './get_doc_by_slug'

export function getAllDocs() {
  const docsDirectory = join(process.cwd(), 'posts')
  const slugs = fs.readdirSync(docsDirectory)
  const docs = slugs.map((slug) => getDocBySlug(slug))

  return docs
}
