import React from "react"
import "./Quiz.css"
import Answer from "../Answer"
import ProgressBar from "../ProgressBar"

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)

    this.onAnswered = this.onAnswered.bind(this)
    this.renderResults = this.renderResults.bind(this)
    this.renderQuiz = this.renderQuiz.bind(this)
    this.quizReset = this.quizReset.bind(this)

    this.state = {
      count: 0,
      endOfQuiz: false,
      points: 0,
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

  onAnswered(isCorrect) {
    this.setState(state => {
      if (state.count < state.quizData.length - 1) {
        return {
          count: state.count + 1,
          points: isCorrect ? state.points + 1 : state.points,
        }
      } else if (state.count === state.quizData.length - 1) {
        return {
          endOfQuiz: true,
          points: isCorrect ? state.points + 1 : state.points,
        }
      }
    })
  }

  renderQuiz() {
    return (
      <div className="quiz">
        <ProgressBar
          progress={Math.round(
            (this.state.count / this.state.quizData.length) * 100
          )}
        />
        <p className="question-number">
          Question {this.state.count + 1} / {this.state.quizData.length}
        </p>
        <p className="question-text">
          {this.state.quizData[this.state.count].question}
        </p>
        {this.state.quizData[this.state.count].answers.map((value, index) => {
          return (
            <Answer
              key={index}
              answer={value.answer}
              correct={value.correct}
              onAnswered={this.onAnswered.bind(this)}
            />
          )
        })}
      </div>
    )
  }

  renderResults() {
    return (
      <div className="results">
        <p className="end-text">The End!</p>
        <p className="end-results">
          You scored: {this.state.points} / {this.state.quizData.length}
        </p>
        <button className="back-to-start" onClick={this.quizReset}>
          Back to Start!
        </button>
      </div>
    )
  }

  quizReset() {
    this.setState(state => {
      return {
        count: 0,
        endOfQuiz: false,
        points: 0,
      }
    })
  }

  render() {
    if (this.state.endOfQuiz) {
      return this.renderResults()
    } else {
      return this.renderQuiz()
    }
  }
}
