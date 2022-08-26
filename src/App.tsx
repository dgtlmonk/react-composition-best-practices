import { Fragment, useState } from 'react'
import './App.css'

const SomeComponent = () => {
  console.log('title rendered')
  return (
  <p className="read-the-docs">
    Use Effects
  </p>)
}

const StateDown= () => {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
     <h2>State Down</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </Fragment>
  )
}

const DumbChildComponent = () => {
  return <h2>Child Comp</h2>
}

const ChildAsProps = ({children}) => {
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} />
      {children}
    </div>
  )
}

const CompPropsTitle = () => <h2>Component as Props</h2>


const CompAsProps = ({left, right}) => {
  const [text, setText] = useState('')

  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} />
      {left}
      <CompPropsTitle />
      {right}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StateDown />
      <SomeComponent />
      <ChildAsProps>
        <DumbChildComponent/>
      </ChildAsProps>
      <CompAsProps left={<DumbChildComponent/>} right={<DumbChildComponent />}/>
   </div>
  )
}

export default App
