// Функциональные компоненты

// export const Message = () => {
//   return <h3>I am message</h3>;
// };

// export const Message = () => <h3>I am message</h3>;

// export const Message = (props) => {
//   console.log(props);
//   return <h3>Hello {props.name}</h3>;
// };

// export const Message = ({ name }) => {
//   return <h3>Hello {name}</h3>;
// };

// Классовые компоненты

import React from 'react'
import './Message.style.css'

export class Message extends React.Component {
  // render() {
  //   return <h3>Hello {this.props.name}</h3>;
  // }
  render() {
    const { name, world, doSmth, bold } = this.props
    return (
      <h3 onClick={doSmth} className={'message' + (!bold ? ' header' : '')}>
        {world}
        {name}
      </h3>
    )
  }
}
