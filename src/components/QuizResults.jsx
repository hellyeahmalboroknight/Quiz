import React, { Component } from 'react'
import style from "../styles/components/results.module.scss"


export default class QuizResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            correctCount: 0
        }

    }


    componentDidMount() {
        this.props.info.questions.forEach((question, i) => {
            question.correctAnswer === this.props.results[i] &&
                this.setState((prev => ({ correctCount: prev.correctCount + 1 })))
        })
    }


    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>
                    Result: {this.state.correctCount} / {this.props.count}
                </p>
                <div>
                    {this.props.info.questions.map((question, i) => (
                        <>
                            <div key={i}>{question.questionText}</div>
                            <ul>
                                {question.answers.map((a, j) => (
                                    <li key={j}
                                    className={this.props.results[i]=== a && 
                                                question.correctAnswer === a ? style.correct
                                                : this.props.results[i] == a &&
                                                question.correctAnswer !== a
                                                ? style.wrong :
                                                ""
                                            }
                                    
                                    >{a}</li>
                                ))}
                            </ul>
                        </>
                    ))}
                </div>
                <button onClick={() => this.props.tryAgain()}>Try again</button>
            </div>
        )
    }
}
