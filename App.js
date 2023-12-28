import React from "react"
import './App.css'

import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'
import Joke from './components/Joke'


function App() {
  const jokeElements = Joke.map(joke=> <Joke />)

    return (
      <div className='App'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    );
  }
  
  export default App;