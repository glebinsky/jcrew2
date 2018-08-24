import React, { Fragment } from 'react';
import { getGridItems, getLandingImagePath } from 'data-calls';
import Item from 'sub/item/item';
import './content.css';

export default function Content(props) {
  return (
    <Fragment>
      <a className="landing-page-heading">
        <img src={getLandingImagePath()} />
      </a>
      <div className="grid-wrapper">
        <ul className="grid">
          { getGridItems().map(i => {
            return (
              <Item
                key={i.id}
                baseImage={i.baseImage}
                expandedImage={i.expandedImage}
                description={i.description}
              />
            )
          })}
        </ul>
      </div>
    </Fragment>
  );
}
