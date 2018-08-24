import React, { Component } from 'react';
import { getProductList } from 'data-calls';
import Item from 'sub/item/item';
import './content.css';

export default class Content extends Component {
  componentDidMount(){
    getProductList(this.props.match.params.category)
      .then(productList => this.setState({ productList }));
  }

  state = {
    productList: []
  }

  render(){
    return this.state.productList.map(item =>
      <ProductListItem key={item.folderId} header={item.header} products={item.products} />
    );
  }
}

function ProductListItem(props) {
  return (
    <section>
      <h1 className="landing-page-heading">{props.header}</h1>
      <div className="grid-wrapper">
        <ul className="grid">
          { props.products.map((i, x) =>
              <Item
                key={`${i.productId}-${x}`}
                baseImage={i.baseImage}
                expandedImage={i.expandedImage}
                description={i.description}
              />
          )}
        </ul>
      </div>
    </section>
  );
}
