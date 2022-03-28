// Функциональные компоненты

// export const Message = () => {
//   return <h3>I am message</h3>;
// };

// export const Message = () => <h3>I am message</h3>;

import './Message.style.css'

export const Message = ({ author, text }) => {
  return (
    <div className={'message'}>
      <span>{author}: </span>
      <span>{text}</span>
    </div>
  )
}

// export const Message = ({ name }) => {
//   return <h3>Hello {name}</h3>;
// };

// Классовые компоненты

// import React from 'react'
// import './Message.style.css'

// export class Message extends React.Component {
//   // render() {
//   //   return <h3>Hello {this.props.name}</h3>;
//   // }
//   render() {
//     const { name, world, doSmth, bold, number } = this.props
//     return (
//       <h3 onClick={doSmth} className={'message' + (!bold ? ' header' : '')}>
//         {world}
//         {name}
//       </h3>
//     )
//   }
// }
