import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {

  state = {
    image: this.props.baseImage
  }

  onMouseOver = () => {
    this.setState({ image: this.props.expandedImage })
  }

  onMouseOut = () => {
    this.setState({ image: this.props.baseImage })
  }

  render() {
    return (
      <li className="item"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div className="description-wrapper">
          <div>{this.props.description}</div>
          <a>shop now</a>
        </div>
        <img src={this.state.image} />
      </li>
    );
  }
}
