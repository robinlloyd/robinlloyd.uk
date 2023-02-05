import { Token, TokenType, TokenTypes } from '@ui/tokens/types'

export default function handleTokenErrors (
  name: string,
  type: TokenType,
  value: string | Token
): void {
  if (typeof name !== 'string' || name === '') {
    throw new Error('Token name must be a non-empty string')
  }
  if (!Object.values(TokenTypes).includes(type)) {
    throw new Error('Token type must be one of the following: ' + Object.values(TokenTypes).join(', '))
  }
  if (typeof type !== 'string') {
    throw new Error('Token type must be a string')
  }
  if (typeof value !== 'string' || value === '') {
    throw new Error('Token value must be a non-empty string')
  }
}
