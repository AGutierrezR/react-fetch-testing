import { convert, Rate } from './currency'

describe('Convert request', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return USD rate', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockResolvedValue(mockRateResponse({ USD: 1.42 }))

    const rate = await convert('EUR', 'USD')
    expect(rate).toBe(1.42)
    expect(fetch).toBeCalledTimes(1)
  })

  it('Handles exceptions with null', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API Failure'))

    const rate = await convert('EUR', 'USD')
    expect(rate).toBe(null)
    expect(fetch).toBeCalledTimes(1)
  })
})

// Utils
function mockRateResponse(rates: Rate) {
  return {
    json: () => Promise.resolve({ rates }),
  } as Response
}
