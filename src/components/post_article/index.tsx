import * as styles from './styles'

interface IPostArticleProps {
  content: string
  meta: {
    date: string
    series: string
    subtitle: string
    tags: string[]
    title: string
  }
}

const PostArticle = ({ content, meta }: IPostArticleProps) => {
  const { date, series, subtitle, tags, title } = meta

  return (
    <div css={styles.article}>
      <h1 css={styles.title}>{title}</h1>
      <h2 css={styles.subtitle}>{subtitle}</h2>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostArticle
