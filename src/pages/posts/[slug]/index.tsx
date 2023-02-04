// import { notFound } from 'next/navigation'
// import Markdown from 'markdown-to-jsx'

import { getPostContent } from '@helpers/get_post_content'
import { getPostsMetadata } from '@helpers/get_posts_metadata'

// import Code from '@components/markdown_replacements/code'
import { markdownToHtml } from '@helpers/markdown_to_html'
import { getAllDocs } from '@src/helpers/get_all_docs'
import { getDocBySlug } from '@src/helpers/get_doc_by_slug'
import Head from 'next/head'

// interface IPostPageProps {
//   params: {
//     slug: string
//   }
// }

export const PostPage = ({ content }: any) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
      </Head>
      <p>content</p>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

// interface IStaticProps {
//   params: {
//     slug: string
//   }
// }

// export const getStaticProps = async ({ params }: IStaticProps) => {
//   const { data, content } = getPostContent(params.slug)
//   const highlightedContent = await markdownToHtml(content || '')
//   return {
//     props: {
//       data,
//       content: highlightedContent
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const posts = getPostsMetadata()
//   return posts.map(({ slug }) => {
//     return {
//       slug: slug
//     }
//   })
// }

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
