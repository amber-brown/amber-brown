import React from "react"
import "./Answer.css"

export default class Answer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="answer">
        <p className="answer-text">{this.props.answer}</p>
      </div>
    )
  }
}
