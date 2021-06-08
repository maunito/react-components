import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import GoogleMapReact from 'google-map-react'
import Marker from './components/marker'
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

  selectCard = (card) => {
    console.log(card)
    this.setState({
      selectedCard: card
    })
  }



  render() {

    let center = {
      lat: -16.2837065,
      lng: -63.5493965
    }

    if (this.state.selectedCard) {
      center = {
        lat: this.state.selectedCard.lat,
        lng: this.state.selectedCard.lng
      }
    }

    return (
      <div className ="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="cards-container">
            {this.state.cards.map((card) => {
              return <Card 
              key={card.name} 
              card={card}
              selectCard={this.selectCard}/>
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={1}>
              {this.state.cards.map((card) => {
              return <Marker 
                key={card.name} 
                lat={card.lat} 
                lng={card.lng}
                text={card.name}
                selected={card === this.state.selectedCard}/>
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
  
}

export default App;
