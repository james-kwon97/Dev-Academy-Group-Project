import { cleanup } from '@testing-library/react'
import { expect, beforeEach } from 'vitest'
import matchers, {
  TestingLibraryMatchers,
} from '@testing-library/jest-dom/matchers'

beforeEach(cleanup)

expect.extend(matchers)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/ban-types
    interface Matchers<R = void, T = {}> extends TestingLibraryMatchers<T, R> {}
  }
}
