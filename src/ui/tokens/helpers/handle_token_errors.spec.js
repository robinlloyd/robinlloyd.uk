import { token } from '@ui/tokens'
import handleTokenErrors from './handle_token_errors'

it('should not throw an error with a valid token', () => {
  expect(() => handleTokenErrors('valid.token', 'color', '#ffffff')).not.toThrow()
})

it('should throw an error if the token name is invalid', () => {
  expect(() => handleTokenErrors('', 'color', '#ffffff')).toThrow()
  expect(() => handleTokenErrors(null, 'color', '#ffffff')).toThrow()
})

it('should throw an error if the token type is invalid', () => {
  expect(() => handleTokenErrors('invalid.token', '', '#ffffff')).toThrow()
  expect(() => handleTokenErrors('invalid.token', null, '#ffffff')).toThrow()

  expect(() => handleTokenErrors('invalid.token', 'non-enum-value', '#ffffff')).toThrow()
})

it('should throw an error if the token value is invalid', () => {
  expect(() => handleTokenErrors('invalid.token', 'color', '')).toThrow()
  expect(() => handleTokenErrors('invalid.token', 'color', null)).toThrow()
})

it('should not throw an error if the token type is included in the enum', () => {
  expect(() => handleTokenErrors('valid.token', 'color', '#ffffff')).not.toThrow()
  expect(() => handleTokenErrors('valid.token', 'dimension', '20px')).not.toThrow()
  expect(() => handleTokenErrors('valid.token', 'duration', '0.3s')).not.toThrow()
  expect(() => handleTokenErrors('valid.token', 'font-family', 'Arial')).not.toThrow()
  expect(() => handleTokenErrors('valid.token', 'font-weight', 'bold')).not.toThrow()
  expect(() => handleTokenErrors('valid.token', 'shadow', '0 0 0 1px #000000')).not.toThrow()
})
