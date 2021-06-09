import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import GoogleMapReact from 'google-map-react'
import Marker from './components/marker'

import Panel from './components/panel'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      allCards: [],
      selectedCard: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/maunito/heros/main/cards.json")
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
    this.setState({
      selectedCard: card
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      cards: this.state.allCards.filter((card) => new RegExp(event.target.value, "i").exec(card.name))
    });
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
        <Panel/>
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
                mapImage={card.mapImage}
                mapImageBorderColor={card.color}

                selected={card === this.state.selectedCard}/>
            })}
          </GoogleMapReact>
        </div>
        <div className="search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={this.state.search}
            onChange={this.handleSearch} />
        </div>
        <div className="main">
          <div className="cards-container">
            {this.state.cards.map((card) => {
              return <Card 
              key={card.name} 
              card={card}
              selectCard={this.selectCard}/>
            })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
