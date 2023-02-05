import Image from 'next/image'
import Link from 'next/link'

import Logo from '@components/logo'

import * as styles from './styles'

const Header = () => {
  return (
    <header css={styles.header}>
      <Link href='/'>
        <Logo />
      </Link>
    </header>
  )
}

export default Header
