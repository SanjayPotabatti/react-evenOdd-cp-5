// Write your code here
import {Component} from 'react'
import './index.css'

class evenOdd extends Component {
  state = {no: 0}

  getRandomNo = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randonNo = this.getRandomNo()
    this.setState(prevState => ({no: prevState.no + randonNo}))
  }

  render() {
    const {no} = this.state
    const eOText = no % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg">
        <div className="bgContainer">
          <h1 className="heading">
            Count <span>{no}</span>
          </h1>
          <p className="para">Count is {eOText}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Incement
          </button>
          <p className="smallPara">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default evenOdd
