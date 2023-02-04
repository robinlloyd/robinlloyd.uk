import Link from 'next/link'

import '@src/styles/globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {

  const renderHeader = () => {
    return (
      <header>
        <Link href='/'>Robin Lloyd - Javascript Development Blog</Link>
      </header>
    )
  }

  const renderFooter = () => {
    return (
      <footer>Created with ❤️</footer>
    )
  }

  return (
    <html>
      <head />
      <body>
        {renderHeader()}
        {children}
        {renderFooter()}
      </body>
    </html>
  )
}
