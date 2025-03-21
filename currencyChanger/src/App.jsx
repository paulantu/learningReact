import { useState } from 'react'
import './App.css'
import useCurrencyInformations from './hooks/useCurrencyInformations'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, SetTo] = useState("bdt")
  const [convertedAmount, setConvertedAmount] = useState(0)



  const currencyInfo = useCurrencyInformations(from)
  const options = Object.keys(currencyInfo)


  const swap = () => {
      setFrom(to)
      SetTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
  }


const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
}








  return (
    
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('./src/assets/bg-currency-exchanger.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount) => setAmount(amount)}
                         />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                           onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => SetTo(currency)}
                          selectCurrency={to}
                          amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {to.toUpperCase()} to {from.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
