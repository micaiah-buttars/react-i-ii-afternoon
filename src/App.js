import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.jsx';

class App extends Component {
  constructor(){
    super()

    this.state = {
      index: 0
    }

    this.handleClickPrev = () => {
        this.setState({
          index: this.state.index - 1
        })
      }
    this.handleClickNext = () => {
        this.setState({
          index: this.state.index + 1
        })
      }
  }
  render() {
    return (
      <div className="App">
      <div>
      <header className="header"><strong className="home">Home</strong></header>
      </div>

        <Card index={this.state.index}/>
        <div className="buttons">
          <h3 className="prev" onClick={this.handleClickPrev}>{`< Previous`}</h3>
          <h3 className="next" onClick={this.handleClickNext}>{`Next >`}</h3>
        </div>
      
      </div>
    );
  }
}

export default App;
