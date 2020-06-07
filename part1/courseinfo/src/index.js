import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
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

const Content = (props) => {

  return (
    <div>
      <Part name={props.part} number={props.number}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <div>

        <p>Number of exercises {props.number}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content part={course.parts[0].name} number={course.parts[0].exercises}/>
      <Content part={course.parts[1].name} number={course.parts[1].exercises}/>
      <Content part={course.parts[2].name} number={course.parts[2].exercises}/>
      <Total number={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
