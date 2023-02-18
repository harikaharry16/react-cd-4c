// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="head">
            Bob ate <span className="span-el">{mango}</span>mangoes
            <span className="span-el">{banana}</span>bananas
          </h1>
          <div className="items-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="m-btn" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="m-btn" onClick={this.onBanana}>
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
