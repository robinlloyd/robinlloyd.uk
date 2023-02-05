import { css } from '@emotion/react'

export const article = css`
  margin-top: 50px;

  article {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 10px;

    p {
      margin: 1.5rem 0;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.7;
    }

    p > code, ul > li > code, ol > li > code {
      font-size: 0.9rem;
      padding: 3px 5px;
      border-radius: 5px;
      color: #f8f8f2;
      background: #272822;
    }

    ul > li > code:only-child, ol > li > code:only-child {
      display: inline-block;
      margin-bottom: 10px;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-family: var(--heading-font);
      font-weight: 800;
    }
  }
`

export const title = css`
  margin-bottom: 0;
  text-align: center;
  font-family: var(--heading-font);
  font-size: 2.5rem;
  font-weight: 900;
`

export const subtitle = css`
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
  color: #999;
  font-size: 1rem;
  font-family: var(--heading-font);
  font-weight: 500;

`
