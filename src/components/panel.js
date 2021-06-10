import React from "react";
import './panel.css';

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <h1 className="Panel-title">
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Panel;
