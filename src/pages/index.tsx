import { getPostsMetadata } from '@helpers/get_posts_metadata'

import PostCard from '@components/post_card'

interface IPostPreview {
  date: string
  slug: string
  subtitle: string
  title: string
}

const HomePage = () => {
  const renderPreviews = (post: IPostPreview) => {
    return (
      <div key={post.slug}>
        <PostCard post={post} />
      </div>
    )
  }

  const posts = getPostsMetadata()
  return (
    <div>
      <h1>Home</h1>
      {posts.map(renderPreviews)}
    </div>
  )
}

export default HomePage
