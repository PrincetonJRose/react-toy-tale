import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import toys from './resources/toys'
import ToyContainer from './ToyContainer'
import ToyForm from './ToyForm'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      toys,
      addToy: false
    }
  }

  handleSubmit = (event) => {
    console.log(event.target[0])
    event.preventDefault()
    let newToy = {
      name: event.target[0].value,
      image: event.target[1].value,
      likes: 0
    }
    this.setState({
      toys: [...this.state.toys, newToy]
    })
    event.target.reset()
  }
  
  increaseLikes =(id)=> {
    let moreLikes = this.state.toys.map( toy => {
      if (toy.id == id) {
        toy.likes += 1
        return toy
      } else {
        return toy
      }
    })
    this.setState({
      toys: moreLikes
    })
  }

  toggleForm =()=> {
    this.setState({
      addToy: !this.state.addToy
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div id='toy-header'>
          <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" alt="toy-header"/>
        </div>
          {this.state.addToy ? <ToyForm handleSubmit={this.handleSubmit}/> : null}
        <p>Andy needs your help! <button id='new-toy-btn' onClick={this.toggleForm}>Add a new toy!</button></p>
          <ToyContainer toys={this.state.toys} increaseLikes={this.increaseLikes}/>
      </div>
    );
  }
}

export default App;
