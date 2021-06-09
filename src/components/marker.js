import React from 'react';
import './marker.css';

class Marker extends React.Component {
  render() {
    const style = {
      backgroundImage: "url('" + this.props.mapImage + "')",
      borderColor: this.props.mapImageBorderColor
    }
    let classes ="marker";
    if (this.props.selected) {
      classes += " selected";
    }
    return (
      <div className={classes} style={style}>
        <h6>{this.props.text}</h6>
      </div>
    );
  }
}

export default Marker;