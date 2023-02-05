// import theme provider
// import theme to use
// theme should use design tokens
// how to go about tokens that are aliases
// can I do that at a component level?

import type { AppProps } from 'next/app'

import { Vollkorn, Montserrat } from '@next/font/google'
import { Global } from '@emotion/react'

import { globals } from '@src/styles/globals'

const vollkorn = Vollkorn({
  subsets: ['latin'],
  variable: '--body-font'
})
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--heading-font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${vollkorn.className} ${montserrat.variable} ${vollkorn.variable}`}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </div>
  )
}
