import fs from 'fs'
import matter from 'gray-matter'

export const getPostMetadata = (file: string) => {
  const folder = './src/posts'
  const fileContents = fs.readFileSync(`${folder}/${file}`, 'utf8')
  const { data } = matter(fileContents)
  return {
    title: data.title,
    date: data.date,
    subtitle: data.subtitle,
    slug: file.replace('.md', '')
  }
}
