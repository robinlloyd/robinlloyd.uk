import Header from '@components/layout/header'

import * as styles from './styles'

const HomeTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main css={styles.main}>{children}</main>
    </>
  )
}

export default HomeTemplate
