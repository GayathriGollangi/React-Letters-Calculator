// Write your code here
import {Component} from 'react'
import './index.css'

export default class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeSearchInput = event => {
    // const val = e.target.value
    const newText = event.target.value
    this.setState({inputText: newText})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length

    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>

          <div className="search-box">
            <label className="phrase" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the Phrase"
              id="userInput"
              onChange={this.onChangeSearchInput}
            />

            <div>
              <p className="btn">No.of letters: {count}</p>
            </div>
          </div>
        </div>

        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
