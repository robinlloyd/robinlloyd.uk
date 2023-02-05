import { getAllDocs } from '@helpers/get_all_docs'

import HomeTemplate from '@components/templates/home_template'
import PostCardList from '@components/post_list'

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
  return (
    <HomeTemplate>
      <PostCardList posts={posts} />
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
