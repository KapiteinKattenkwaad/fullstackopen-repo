import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToBad = newValue => {
    setBad(newValue)
  }
  const setToNeutral = newValue => {
    setNeutral(newValue)
  }
  const setToGood = newValue => {
    setGood(newValue)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Display value={bad} />
      <Button handleClick={() => setToBad(bad +1)} text="Bad" />
      <Display value={neutral} />
      <Button handleClick={() => setToNeutral(neutral +1)} text="Neutral" />
      <Display value={good} />
      <Button handleClick={() => setToGood(good +1)} text="good" />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
