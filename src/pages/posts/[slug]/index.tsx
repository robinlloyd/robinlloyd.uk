import { markdownToHtml } from '@helpers/markdown_to_html'
import { getAllDocs } from '@helpers/get_all_docs'
import { getDocBySlug } from '@helpers/get_doc_by_slug'

import PostTemplate from '@components/templates/post_template'

interface IPostPageProps {
  content: string
  meta: {
    date: string
    series: string
    subtitle: string
    tags: string[]
    title: string
  }
  slug: string
}

export const PostPage = ({ content, meta, slug }: IPostPageProps) => {
  return (
    <PostTemplate>
      <h1>{meta.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </PostTemplate>
  )
}

export async function getStaticProps({ params }: any) {
  const doc = getDocBySlug(params.slug)
  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content
    }
  }
}

export async function getStaticPaths() {
  const docs = getAllDocs()

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug
        }
      }
    }),
    fallback: false
  }
}

export default PostPage
