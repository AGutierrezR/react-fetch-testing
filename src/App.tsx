import React, { useEffect, useState } from 'react'
import './App.css'
import { convert } from './services/currency'

function App() {
  const [usdCurrency, setUsdCurrency] = useState(0)

  useEffect(() => {
    fetchAPI()
  }, [])

  async function fetchAPI() {
    const currency = await convert('EUR', 'USD')
    setUsdCurrency(currency as number)
  }

  return (
    <div className="App" role="contentinfo">
      1 EUR = {usdCurrency}
    </div>
  )
}

export default App
