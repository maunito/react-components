import React from "react";
import './card.css';

class Card extends React.Component {
  render() {

    const name = this.props.card.name;

    const style = {
      backgroundImage: "url('" + this.props.card.imageUrl + "')"
    };

    const color = {
      color: this.props.color.toString
    }

    
    return (
      <div className="card">
        <div className="card-image" style={style}>
        </div>
        <div className="card-name-container">
          <h2 style={color }className="card-name">{name}</h2>
        </div>
      </div>

    );
  }
}

export default Card;