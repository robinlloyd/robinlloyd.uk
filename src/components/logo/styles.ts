import { css } from '@emotion/react'

export const logo = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  padding: 15px;
  background: #333;
  overflow: hidden;

  &:hover {
    background: #3dffc5;

    mask, path {
      fill: #333;
    }
  }

  svg {
    mask, path {
      fill: #fff;
    }
  }
`
