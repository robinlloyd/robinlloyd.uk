import { getAllDocs } from '@helpers/get_all_docs'

import HomeTemplate from '@components/templates/home_template'
import PostCard from '@components/post_card'

interface IPost {
  meta: {
    date: string
    previewImage: string
    subtitle: string
    title: string
  }
  slug: string
}
interface IHomePageProps {
  posts: IPost[]
}

const HomePage = ({ posts }: IHomePageProps) => {
  const renderPreviews = (post: IPost) => {
    return (
      <div key={post.slug}>
        <PostCard post={post.meta} slug={post.slug} />
      </div>
    )
  }

  return (
    <HomeTemplate>
      {posts.map(renderPreviews)}
    </HomeTemplate>
  )
}

export async function getStaticProps() {
  const docs = getAllDocs()

  return {
    props: {
      posts: docs
    }
  }
}

export default HomePage
