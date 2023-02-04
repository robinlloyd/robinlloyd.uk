'use client'

import Markdown from 'markdown-to-jsx'
import Code from '@components/markdown_replacements/code'

interface IMarkdownWrapperProps {
  children: string
}

const MarkdownWrapper = ({ children }: IMarkdownWrapperProps) => {
  return (
    <Markdown
      options={{
        overrides: {
          code: {
            component: Code
          }
        }
      }}
    >
      {children}
    </Markdown>
  )
}

export default MarkdownWrapper
