import { convert } from './currency'
import fetch from 'jest-fetch-mock'

describe('Convert request', () => {
  afterEach(() => {
    fetch.resetMocks()
  })

  it('Should return USD rate', async () => {
    fetch.mockResponse(JSON.stringify({ rates: { USD: 1.42 } }))

    const rate = await convert('EUR', 'USD')
    expect(rate).toBe(1.42)
    expect(fetch).toBeCalledTimes(1)
  })

  it('Handles exceptions with null', async () => {
    // fetch.mockReject(new Error('Api Failure'))
    fetch.mockReject()

    const rate = await convert('EUR', 'USD')
    expect(rate).toBe(null)
    expect(fetch).toBeCalledTimes(1)
  })
})
