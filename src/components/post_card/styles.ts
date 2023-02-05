import { css } from '@emotion/react'

export const card = css`
  display: block;
  font-family: var(--heading-font); // TODO: Change to --sans-serif-font

  a {
    display: block;
    padding: 20px;
    text-decoration: none;
    color: inherit;
    border: 1px solid #eee;

    &:hover {
      h2 {
        color: #3dffc5;
      }

      color: inherit;
      border-color: #3dffc5;
      border-style: dashed;
    }
  }
`
