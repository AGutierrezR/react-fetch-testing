import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./services/currency', () => {
  return {
    convert: jest.fn().mockResolvedValue(1.42),
  }
})

describe('first', () => {
  test.only('renders learn react link', async () => {
    render(<App />)
    const element = await screen.findByRole('contentinfo')
    expect(element).toHaveTextContent('1.42')
  })
})
