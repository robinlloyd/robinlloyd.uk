import { css } from '@emotion/react'

export const globals = () => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    a {
      text-decoration: underline 2px;
      text-decoration-color: #3dffc5;
      text-underline-offset: 2px;
      &:hover {
        color: #3dffc5;
      }
    }

    ul, ol {
      margin-left: 13px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`
