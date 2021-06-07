import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
// import Panel from './components/panel'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/maunito/react-components/master/public/cards.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          allCards: data,
          cards: data,
          selectedCard: data[0]
        })
      })
  }

  render() {

    return (
      <div className ="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="cards-container">
            {this.state.cards.map((card) => {
              return <Card card={card}/>
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
  
}

export default App;
