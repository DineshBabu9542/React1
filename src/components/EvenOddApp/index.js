// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNum()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text}</p>
          <div className="btn-container">
            <button className="btn" type="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p className="description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
