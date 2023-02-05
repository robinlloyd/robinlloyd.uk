import Link from 'next/link'

import { formatDate } from './helpers'
import * as styles from './styles'

interface IPostCardProps {
  post: {
    date: string
    previewImage?: string
    subtitle: string
    title: string
  }
  slug: string
}

const PostCard = ({ post, slug }: IPostCardProps) => {
  const { date, subtitle, title } = post
  return (
    <article css={styles.card}>
      <Link href={`/posts/${slug}`}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{formatDate(date)}</p>
      </Link>
    </article>
  )
}

export default PostCard
