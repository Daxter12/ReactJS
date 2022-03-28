import { useEffect, useState } from 'react'

export const Counter = ({ randomNumber }) => {
  const [count, setCount] = useState(0)
  // const countState = useState(0)
  // const count = countState(0)
  // const setCount = countState(1)

  useEffect(() => {
    console.log('like did mount ')
  }, [])

  useEffect(() => {
    console.log('like did mount + did update ')
  })

  useEffect(() => {
    console.log('like did mount + count did update')
    return () => {
      console.log('like will unmount no dependencies array')
    }
  }, [count])

  useEffect(() => {
    console.log('like did mount + randomNumber did update')
  }, [randomNumber])

  useEffect(() => {
    console.log('like did mount + count did update or randomNumber')
    return () => {
      console.log('like will unmount [count, randomNumber]')
    }
  }, [count, randomNumber])

  useEffect(() => {
    return () => {
      console.log('like will unmount')
    }
  }, [])

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Click!</button>
      <div>{randomNumber}</div>
    </div>
  )
}

// import { clear } from '@testing-library/user-event/dist/clear'
// import React from 'react'

// export class Child extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('child constructor')
//     this.state = {
//       count: 10,
//     }
//   }

//   componentDidMount() {
//     console.log('child component did mount')
//   }

//   componentWillUnmount() {
//     console.log('child component will unmount')
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('child did update', prevProps, prevState)
//   }

//   render() {
//     console.log('child render')
//     return (
//       <div>
//         <h4>Child component</h4>
//       </div>
//     )
//   }
// }

// export class Counter extends React.Component {
//   // state = {
//   //   count: 0,
//   // }

//   constructor(props) {
//     super(props)
//     console.log('constructor')
//     this.state = {
//       count: 10,
//       showChild: false,
//     }
//   }

//   componentDidMount() {
//     console.log('component did mount')
//     // this.interval = setInterval(() => {
//     //   this.setState((prevState) => ({
//     //     count: prevState.count + 1,
//     //   }))
//     // }, 1000)
//   }

//   componentWillUnmount() {
//     clear.interval(this.interval)
//     console.log('componentWill unmount')
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('component did update', prevProps, prevState)
//   }

//   increase = () => {
//     this.setState(
//       (oldState) => ({ count: oldState.count + 1 }),
//       () => {
//         console.log('2nd arg', this.state.count)
//       }
//     )
//   }

//   decrease = () => {
//     this.setState(
//       (oldState) => ({ count: oldState.count - 1 }),
//       () => {
//         console.log('2nd arg', this.state.count)
//       }
//     )
//   }

//   toogleChild = () => {
//     this.setState((prevState) => ({
//       showChild: !prevState.showChild,
//     }))
//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         <h4>{this.state.count}</h4>
//         <button onClick={this.toogleChild}>Click!</button>
//         {this.state.showChild && <Child />}
//       </div>
//     )
//   }
// }
