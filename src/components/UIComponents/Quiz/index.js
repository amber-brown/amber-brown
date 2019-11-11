import React from "react"
import "./Quiz.css"
import Answer from "../Answer"
import ProgressBar from "../ProgressBar"

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      quizData: [
        {
          question: "In which country was the first car radio made?",
          answers: [
            {
              answer: "Germany",
              correct: true,
            },
            {
              answer: "France",
              correct: false,
            },
            {
              answer: "America",
              correct: false,
            },
            {
              answer: "Canada",
              correct: false,
            },
          ],
        },
        {
          question: "What is the life expectancy of a rabbit?",
          answers: [
            {
              answer: "1-2 years",
              correct: true,
            },
            {
              answer: "3-4 years",
              correct: false,
            },
            {
              answer: "5-6 years",
              correct: false,
            },
            {
              answer: "7-8 years",
              correct: false,
            },
          ],
        },
        {
          question:
            "How many teeth should a human adult have, including wisdom teeth?",
          answers: [
            {
              answer: "26",
              correct: false,
            },
            {
              answer: "28",
              correct: false,
            },
            {
              answer: "32",
              correct: true,
            },
            {
              answer: "36",
              correct: false,
            },
          ],
        },
        {
          question: "Improve Hollow Crown is a variety of which vegetable?",
          answers: [
            {
              answer: "Turnip",
              correct: false,
            },
            {
              answer: "Carrot",
              correct: false,
            },
            {
              answer: "Parsnip",
              correct: true,
            },
            {
              answer: "Potato",
              correct: false,
            },
          ],
        },
        {
          question: "Telesto is a moon of which planet?",
          answers: [
            {
              answer: "Jupiter",
              correct: false,
            },
            {
              answer: "Saturn",
              correct: true,
            },
            {
              answer: "Neptune",
              correct: true,
            },
            {
              answer: "Uranus",
              correct: false,
            },
          ],
        },
      ],
    }
  }

  render() {
    return (
      <div class="Quiz">
        <ProgressBar
          progress={Math.round(
            (this.state.count / this.state.quizData.length) * 100
          )}
        />
        <p>
          Question {this.state.count} / {this.state.quizData.length}
        </p>
        <p>{this.state.quizData[this.state.count].question}</p>
        {this.state.quizData[this.state.count].answers.map((value, index) => {
          return (
            <Answer key={index} answer={value.answer} correct={value.correct} />
          )
        })}
      </div>
    )
  }
}
