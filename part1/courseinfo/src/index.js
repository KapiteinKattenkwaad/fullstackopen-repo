import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
        <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      The name of this course is {props.name} the number of excercises is {props.number}
    </div>
    )
}

const Content = () => {

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part name={part1} number={exercises1}/>
      <Part name={part2} number={exercises2}/>
      <Part name={part3} number={exercises3}/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
