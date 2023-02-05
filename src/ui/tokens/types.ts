export const TokenTypes = {
  Color: 'color',
  Dimension: 'dimension',
  Duration: 'duration',
  Font: 'font-family',
  FontWeight: 'font-weight',
  Shadow: 'shadow'
} as const

export type TokenType = typeof TokenTypes[keyof typeof TokenTypes]

export interface Token {
  name: string
  type: TokenType
  value: string | Token
}
