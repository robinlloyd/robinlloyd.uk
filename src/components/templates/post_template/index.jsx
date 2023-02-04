import Header from '@components/layout/header'

const PostTemplate = ({ children }) => {
  return (
    <>
      <link
        href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        rel="stylesheet"
      />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default PostTemplate
