import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TestQuestion from './components/TestQuestion'

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <main>
          <TestQuestion questionId={1}
          questionText={"Which tag is Used to scripts"}
          answers={["h1","style", "script", "head"]}
          />
        </main>
        <Footer/>
      </>
    )
  }
}
