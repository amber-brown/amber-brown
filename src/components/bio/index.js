import React from "react"
import "./style.css"
import GihubLogo from './GithubLogo.js';
import LinkedinLogo from './LinkedinLogo';

const Bio = () => {
  return (
    <div style={{ margin: '0 16px 24px 16px' }}>
      <h2 className="bio__name-text"><span className="bio__big-text">HEY! </span><span>I'm Amber,</span> <span className="text-light">a</span></h2>
      <h1>SOFTWARE ENGINEER<br />
      <span className="text-light">based in </span><b>LONDON</b></h1>
      <p className="colour-secondary">Javascript / typescript engineer with experience in building<br />solutions for mobile and web</p>
      <div style={{display: "flex", marginBottom: '8px'}}>
        <div style={{marginRight: "8px"}}>
           <a href="https://github.com/amber-brown"><GihubLogo /></a>
        </div>
        <a href="https://www.linkedin.com/in/amberbrown0/"><LinkedinLogo /></a>
      </div>
      <button>Find out more</button>
    </div>
  )
}

export default Bio
