import React from "react"
import "./ProgressBar.css"

export default class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <div
          className="progress-bar"
          style={{ width: this.props.progress * 5 }}
        ></div>
        <p>Progress: {this.props.progress}</p>
      </div>
    )
  }
}
