import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ setFeedback, text }) =>
  <button onClick={setFeedback}>{text}</button>

const Statistic = ({text, value}) => {
  return(
    <div>
      <tr>
        <td>
          {text}:
        </td>

        <td>
          {value}
        </td>
      </tr>
    </div>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <div>
        <h5>
          You need to give feedback
        </h5>
      </div>
    )
  }
  return (
    <div>
      <p>
        <Statistic text='good' value={good} />
        <Statistic text='bad' value={bad} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='total' value={total} />
        <Statistic text='average' value={(good - bad) / total} />
        <Statistic text='neutral' value={(good / total * 100 )} />
      </p>
      </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)


  const setToGood = () => {
    setTotal(total +1); setGood(good +1);
  }
  const setToBad = () => {
    setTotal(total +1); setBad(bad +1);
  }
  const setToNeutral = () => {
    setTotal(total +1); setNeutral(neutral +1);
  }

  return (
    <div>
      <h2>Give feedback</h2>

      <Button setFeedback={setToGood} text='good' />
      <Button setFeedback={setToBad} text='bad' />
      <Button setFeedback={setToNeutral} text='neutral' />
      <h4>Statistics</h4>
      <Statistics total={total} good={good} bad={bad} neutral={neutral} />


    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
