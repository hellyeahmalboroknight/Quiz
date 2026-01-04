import React, { Component } from 'react'
import style from "../styles/components/startQuiz.module.scss"

export default class StartQuiz extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <button 
         onClick={()=>this.props.startQuiz()}   
        className={'btn btn-primary m-2' + style.button}>
            Start
            </button>
            
      </div>
    )
  }
}
