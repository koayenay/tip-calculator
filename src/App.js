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
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage>How did u like the service?</SelectPercentage>
      <SelectPercentage>
        How did your friends like the service?
      </SelectPercentage>
      <Output bill={bill} />
      <Reset />
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

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>Good (10%)</option>
        <option value='10'>Perfect (25%)</option>
      </select>
    </div>
  )
}

function Output({ bill }) {
  return <h3>You pay ${bill} ($A + $B tip)</h3>
}
function Reset() {
  return <button>Reset</button>
}
