import React, { Component } from 'react'

export default class TestQuestion extends Component {
    render() {
        return (
            <div className="question">
                <h2>
                 Question #{this.props.questionId}:{this.props.questionText}
                </h2>
                
                <ul>

                    {this.props.answers.map((a, i) => (
                        <li key={i}>
                            <input type="radio" id='answer1' name='answer' value={a} />
                            <label htmlFor="answer1">{a}</label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
