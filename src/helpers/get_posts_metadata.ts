import fs from 'fs'
import { getPostMetadata } from './get_post_metadata'

export const getPostsMetadata = () => {
  const folder = './src/posts'
  const files = fs.readdirSync(folder)
  const markdownFiles = files.filter((file) => file.endsWith('.md'))

  const posts = markdownFiles.map(getPostMetadata)

  return posts
}
