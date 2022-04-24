import { useState } from 'react'

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({ good, neutral, bad, answers, average, positive }) => {
  if (answers === 0) {
    return <p>No feedback given</p>
  }
  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={ good } />
        <StatisticLine text='neutral' value={ neutral } />
        <StatisticLine text='bad' value={ bad } />
        <StatisticLine text='all' value={ answers } />
        <StatisticLine text='average' value={ average } />
        <StatisticLine text='positive' value={ positive + ' %' } />
      </tbody>
    </table>
  )
}

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [answers, setAnswers] = useState(0)
  
  const setValues = (answer, setCounter) => () => {
    setCounter(answer + 1)
    setAnswers(answers + 1)
  }

  let average = 0
  let positive = 0
  if (answers > 0) {
    average = (good - bad) / answers;
    positive = good/answers * 100 
  } 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setValues(good, setGood)} text="good" />
      <Button handleClick={setValues(neutral, setNeutral)} text="neutral" />
      <Button handleClick={setValues(bad, setBad)} text="bad" /> 
      <h1>statistics</h1>
      <Statistics good={ good } neutral={ neutral} bad ={ bad } answers={ answers } average = { average } positive={ positive }/>
    </div>
  )
}

export default App