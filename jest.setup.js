import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'

expect.extend(matchers)

beforeEach(() => {
  expect.hasAssertions()
})
