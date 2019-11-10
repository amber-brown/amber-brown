import React from "react"
import "./ProgressBar.css"

export default class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <div className="progress-bar">
          <div
            className="progress-complete"
            style={{ width: `${this.props.progress}%` }}
          ></div>
        </div>
        <p>Progress: {this.props.progress}%</p>
      </div>
    )
  }
}
