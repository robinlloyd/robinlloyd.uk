// TODO
// - Better way of getting token values
// in an ideal world I want to be able to do something like:
// token('text.color.body') and it just gets the value
//
// - Add composite types
//
// Something like...
// - name: 'Heading 1'
// - type: 'typography'
// - value: {
//     fontFamily: {
//       name: 'font.family.primary',
//       type: 'fontFamily',
//       value: 'Roboto'
//     },
//     size: {
//       name: 'font.size.h1',
//       type: 'fontSize',
//       value: '2rem'
//     },
//     fontWeight: {
//       name: 'font.weight.bold',
//       type: 'fontWeight',
//       value: 'bold'
//     }
//     lineHeight: {
//       name: 'font.lineHeight.h1',
//       type: 'lineHeight',
//       value: '2rem'
//     }
//   }
// So that each item in the object can be used as a token

import handleTokenErrors from './helpers/handle_token_errors'
import { Token, TokenType } from './types'

export function token (
  name: string,
  type: TokenType,
  value: string | Token
): string | Token {
  handleTokenErrors(name, type, value)

  if (typeof value === 'string') return value

  return {
    name,
    type,
    value: value.value
  }
}
