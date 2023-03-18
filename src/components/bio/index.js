import React from "react"
import "./style.css"

const Bio = () => {
  return (
    <div>
      <h2 className="bio__name-text"><span className="bio__big-text">HEY! </span><span>I'm Amber,</span> <span className="text-light">a</span></h2>
      <h1>SOFTWARE ENGINEER<br />
      <span className="text-light">based in </span><b>LONDON</b></h1>
      <p className="colour-secondary">Javascript / typescript engineer with experience in building<br />solutions for mobile and web</p>
      <button>Find out more</button>
    </div>
  )
}

export default Bio
