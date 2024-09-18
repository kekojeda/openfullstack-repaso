const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='keko'/>
      <Hello name='vicky'/>
      <Hello />

    </div>
  )
}

export default App