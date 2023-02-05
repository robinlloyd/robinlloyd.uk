import { getAllDocs } from '@helpers/get_all_docs'

import HomeTemplate from '@components/templates/home_template'
import PostCardList from '@components/post_list'
import { token } from '@ui/tokens'
import { baseColors } from '@src/ui/tokens/colors/base'

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
      <div style={{ display: 'flex' }}>
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.blue['20']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.blue['40']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.blue['60']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.blue['80']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.blue['90']}`
        }} />
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.red['20']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.red['40']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.red['60']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.red['80']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.red['90']}`
        }} />
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.green['20']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.green['40']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.green['60']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.green['80']}`
        }} />
        <div style={{
          width: '100px',
          height: '100px',
          background: `${baseColors.green['90']}`
        }} />
      </div>
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
