import Link from 'next/link'

interface IPostCardProps {
  post: {
    date: string
    slug: string
    subtitle: string
    title: string
  }
}

const PostCard = ({ post }: IPostCardProps) => {
  const { date, slug, subtitle, title } = post
  return (
    <Link href={`/posts/${slug}`}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{date}</p>
    </Link>
  )
}

export default PostCard
