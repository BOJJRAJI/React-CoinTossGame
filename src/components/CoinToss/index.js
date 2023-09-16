import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tails: 0, heads: 0, headsOrTails: 0}

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        headsOrTails: tossResult,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        headsOrTails: tossResult,
      }))
    }
  }

  render() {
    const {tails, heads, headsOrTails} = this.state
    const url =
      headsOrTails === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img alt="toss result" src={url} className="image" />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {tails + heads}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
