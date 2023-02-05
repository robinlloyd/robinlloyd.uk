import { token } from './index'

it('should return a token value', () => {
  const tokenObj = {
    name: 'MyTokenName',
    type: 'color',
    value: '#FFFFFF'
  }
  const testToken = token(tokenObj.name, tokenObj.type, tokenObj.value)
  expect(testToken).toEqual(tokenObj.value)
})

it('should return a token even if it is inherited from another token', () => {
  const baseToken = token('BaseToken', 'color', 'red')
  const brandPrimary = token('BrandPrimary', 'color', baseToken)
  expect(brandPrimary).toEqual(baseToken)

  const multiNestedToken = token('MultiNestedToken', 'color', brandPrimary)
  expect(multiNestedToken).toEqual(baseToken)
})
