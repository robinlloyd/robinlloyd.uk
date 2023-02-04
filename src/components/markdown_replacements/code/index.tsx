'use client'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'

interface ICodeProps {
  className: string
  children: string
}

const Code = (props: any) => {
  const language = props.className?.replace('lang-', '')

  console.log('======================', props)

  return (
    <SyntaxHighlighter language='js'>
      {props.children}
    </SyntaxHighlighter>
  )
}

export default Code
