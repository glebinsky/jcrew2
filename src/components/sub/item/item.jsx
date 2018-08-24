import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {

  state = { image: getImage(this.props, 0) }

  onMouseOver = () => {
    this.setState({ image: getImage(this.props, 1) });
  }

  onMouseOut = () => {
    this.setState({ image: getImage(this.props, 0) });
  }

  render() {
    return (
      <li className="item"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
      >
        <div className="description-wrapper">
          <p>{this.props.productDescription}</p>
          <a href={`https://www.jcrew.com${this.props.url}`}>shop now</a>
        </div>
        <img src={this.state.image} />
      </li>
    );
  }
}

function getImage(props, shotTypeIndex) {
  const baseImage = `https://i.s-jcrew.com/is/image/jcrew/${props.productCode}_${props.defaultColorCode}`;
  let shot = '';
  if(props.shotType) {
    const shotTypes = props.shotType.split(',');
    shot = shotTypes[shotTypeIndex] || shotTypes[shotTypes.length - 1];
  }
  return `${baseImage}${shot}`;
}
