import Header from '@components/layout/header'

const HomeTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default HomeTemplate
