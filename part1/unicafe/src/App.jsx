import { useState } from 'react'


const Statistics = ({ good, neutral, bad, score, total }) => {
  if (total == 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><StatisticsLine text='good' value={good}/></tr>
          <tr><StatisticsLine text='neutral' value={neutral}/></tr>
          <tr><StatisticsLine text='bad' value={bad}/></tr>
          <tr><StatisticsLine text='all' value={total}/></tr>
          <tr><StatisticsLine text='average' value={score / total}/></tr>
          <tr><StatisticsLine text='positive' value={good / total * 100}/></tr>
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  if (text == 'positive') {
    return (
      <>
        <td>{text}</td>
        <td>{value} %</td>
      </>  
    )
  }
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ score, setScore ] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setScore(score + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score}/>
    </div>
  )
}

export default App
