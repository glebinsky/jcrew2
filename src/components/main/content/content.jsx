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
    return (
      <div className="content-wrapper">
        { this.state.productList.map(item =>
          <ProductListItem key={item.folderId} header={item.header} products={item.products} />
        ) }
      </div>
    );
  }
}

function ProductListItem(props) {
  return (
    <section>
      <h1 className="landing-page-heading">{props.header}</h1>
      <div className="grid-wrapper">
        <ul className="grid">
          { props.products.map((product, x) =>
              <Item key={`${product.productId}-${x}`} {...product} />
          )}
          { emptyItems(props) }
        </ul>
      </div>
    </section>
  );
}

function emptyItems(props) {
  const emptyItems = [];
  for (let i = 0; i < props.products.length % 3; i++) {
    emptyItems.push(<li key={`empty-${i}`} className="item" />);
  }
  return emptyItems;
}
