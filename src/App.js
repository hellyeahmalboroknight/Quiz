import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestQuestion from './components/TestQuestion'
import QuizResults from './components/QuizResults'
import StartQuiz from './components/StartQuiz'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isQuizStarted: false,
      questionNumber: 0,
      userAnswers: [],
      showResults: false
    };
    this.startQuiz = this.startQuiz.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.prevQuestion = this.prevQuestion.bind(this)
    this.stopQuiz = this.stopQuiz.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
  }

startQuiz(){
  this.setState({isQuizStarted: true})
}

nextQuestion() {
  if(this.state.questionNumber !== this.quiz1.questions.length - 1)
  this.setState({questionNumber: this.state.questionNumber + 1})
}

prevQuestion() {
  if(this.state.questionNumber > 0)
  this.setState({questionNumber: this.state.questionNumber - 1})
}

stopQuiz(answers){
  this.setState({isQuizStarted: false})
  this.setState({userAnswers: answers})
  this.setState({showResults: true})
}

tryAgain(){
  this.setState({showResults: false})
  this.setState({userAnswers: []})
  this.setState({questionNumber: 0})
  this.setState({isQuizStarted: false})
}

  quiz1 = {
    quizName: "HTML test",
    quizDescription: "Test your html skill",
    time: 300,
    questions : [
      {
    questionId: 1,
    questionText: "З якою мовою найбільш тісно пов'язано походження імені Кирило?",
    answers: ["Старогрецька", "Латинська", "Старослов'янська", "Готська"],
    correctAnswer: "Старогрецька",
},
{
    questionId: 2,
    questionText: "Яке грецьке слово є основою для імені Кирило?",
    answers: ["Κύριλλος (Kýrillos)", "Κύριος (Kýrios)", "Κύκλος (Kýklos)", "Κήρυλος (Kḗrylos)"],
    correctAnswer: "Κύριλλος (Kýrillos)",
},
{
    questionId: 3,
    questionText: "Що означає грецьке слово 'κύριος' (kýrios), від якого утворено ім'я Кирило?",
    answers: ["Воїн", "Мудрець", "Господар, володар", "Місіонер"],
    correctAnswer: "Господар, володар",
},
{
    questionId: 4,
    questionText: "Хто з відомих святих дав поширення імені Кирило в слов'янських народах у IX столітті?",
    answers: ["Кирило Єрусалимський", "Кирило Олександрійський", "Кирило Турівський", "Кирило (Константин) Філософ"],
    correctAnswer: "Кирило (Константин) Філософ",
},
{
    questionId: 5,
    questionText: "Що спільного між іменем Кирило та кирилицею?",
    answers: ["Нічого", "Кирилицю названо на честь Кирила Олександрійського", "Кирилицю названо на честь святого Кирила (Константина) Філософа", "Це випадковий збіг"],
    correctAnswer: "Кирилицю названо на честь святого Кирила (Константина) Філософа",
}
    ]
  }

  render() {
    return (
      <>
        <Header/>
        <main>
          {this.state.isQuizStarted ? (
             <TestQuestion
          questionId={this.quiz1.questions[this.state.questionNumber].questionId}
          questionText={this.quiz1.questions[this.state.questionNumber].questionText}
          answers={this.quiz1.questions[this.state.questionNumber].answers}
          next={this.nextQuestion}
          prev={this.prevQuestion}
          stop={this.stopQuiz}
          count={this.quiz1.questions.length}
          time={this.quiz1.time}
          />
          ) : this.state.showResults ? (
            <QuizResults 
            name={this.quiz1.quizName}
            result={this.state.userAnswers.length}
            count={this.quiz1.questions.length}
            tryAgain={this.tryAgain}
            info={this.quiz1}
            results={this.state.userAnswers}

            />
          ) : (
          <StartQuiz 
          name={this.quiz1.quizName}
          descroption={this.quiz1.quizDescription}
          startQuiz={this.startQuiz}
          />
         )}
          
        </main>
        <Footer/>
      </>
    )
  }
}


