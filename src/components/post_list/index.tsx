import PostCard from '@components/post_card'

import * as styles from './styles'

interface IPost {
  meta: {
    date: string
    previewImage: string
    subtitle: string
    title: string
  }
  slug: string
}
interface IPostCardListProps {
  posts: IPost[]
}

const PostCardList = ({ posts }: IPostCardListProps) => {
  const renderPreviews = (post: IPost) => {
    return (
      <div css={styles.cardContainer} key={post.slug}>
        <PostCard post={post.meta} slug={post.slug} />
      </div>
    )
  }
  return (
    <div>
      {posts.map(renderPreviews)}
    </div>
  )
}

export default PostCardList
