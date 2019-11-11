import React from "react"
import "./Answer.css"

export default class Answer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        className="answer"
        onClick={() => this.props.onAnswered(this.props.correct)}
      >
        <p className="answer-text">{this.props.answer}</p>
      </button>
    )
  }
}
