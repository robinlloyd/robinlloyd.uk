import Image from 'next/image'
import Link from 'next/link'

interface IPostCardProps {
  post: {
    date: string
    previewImage: string
    subtitle: string
    title: string
  }
  slug: string
}

const PostCard = ({ post, slug }: IPostCardProps) => {
  const { date, previewImage, subtitle, title } = post
  return (
    <Link href={`/posts/${slug}`}>
      <Image src={previewImage} alt='' width={500} height={500} />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{date}</p>
    </Link>
  )
}

export default PostCard
