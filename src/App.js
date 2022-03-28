import './App.css'
import React from 'react'
import { Message } from './components/Message/Message'
import { useEffect, useState } from 'react'
import { Form } from './components/Form/Form'

// import logo from "./logo.svg";
// import { Counter } from './components/Example/Example'

// const world = 'Hello World!'
const name = 'Hello Gleb'
const msgs = [
  {
    author: name,
    text: 'text1',
  },
]

function App() {
  const [messages, setMessages] = useState(msgs)

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: 'me' }])
    console.log('addMessage', messages)
  }

  useEffect(() => {
    console.log('useEffect', messages)
    setTimeout(() => {
      if (messages[messages.length - 1].author != 'Robot') {
        setMessages([...messages, { author: 'Robot', text: 'Hey, I am robot' }])
        console.log('setTimeout', messages)
      }
    }, 5000)
  }, [messages])

  // const updateRand = () => {
  //   setRand(Math.random())
  // }

  // const foo = () => {
  //   alert('Hello')
  // }
  return (
    <div className="App">
      {/* <Counter />
      <Message name={world} year={2022} doSmth={foo} bold={true} />
      <Message name={name} years={24} doSmth={foo} />
      <button onClick={addMessage}>Add msg</button> */}
      {messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))}
      <Form onSubmit={addMessage} />
    </div>
  )
}

export default App
