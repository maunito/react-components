import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import Panel from './components/panel'

class App extends Component {
  render() {

    const card = {
      "name": "Bödvar", 
      "imageUrl": "https://www.brawlhalla.com/c/uploads/2018/11/Bodvar-1.png"
    };

    return (
      <div className ="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="cards-container">
            <Card card={card}/>
            <Card card={card}/>
            <Card card={card}/>
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
  
}

export default App;
