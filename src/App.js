import { useState } from "react"

export default function App() {
  return (
    <div className='App'>
      <TipCalculator />
    </div>
  )
}
function TipCalculator() {
  const [bill, setBill] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = bill * ((percentage1 + percentage2) / 2 / 100)

  function handleReset() {
    setBill("")
    setPercentage1(0)
    setPercentage2(0)
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did u like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friends like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        text='text'
        placeholder='Bill value'
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>Good (10%)</option>
        <option value='10'>Perfect (25%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill}+ ${tip} tip)
    </h3>
  )
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>
}
