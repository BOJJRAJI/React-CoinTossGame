import {Component} from 'react'

import './index.css'

const headsImage = {
  image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  alt: 'head',
}
const tailsImage = {
  image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  alt: 'tail',
}

class CoinToss extends Component {
  state = {heads: 0, tails: 0, imageDetails: headsImage}

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        imageDetails: headsImage,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        imageDetails: tailsImage,
      }))
    }
  }

  render() {
    const {heads, tails, imageDetails} = this.state
    const total = heads + tails
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageDetails.image} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.tossTheCoin}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
