import React from "react";
import './card.css';

class Card extends React.Component {
  render() {


    const name = this.props.card.name;

    const style = {
      backgroundImage: "url('" + this.props.card.imageUrl + "')"
    };

    
    return (
      <div className="card" onClick={this.handleClick} >
        <div className="card-image" style={style}>
        </div>
        <div className="card-name-container">
          <h2 className="card-name">{name}</h2>
        </div>
      </div>
    );
  }
  handleClick = () => {
    // Call the parent method selector
    this.props.selectCard(this.props.card);
  }
}

export default Card;