import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMainNavItems } from 'data-calls';
import './navigation.css';

export default class Navigation extends Component {
  componentDidMount() {
    getMainNavItems()
      .then(navItems => this.setState({navItems}));
  }

  state = {
    navItems: []
  }

  render(){
    return <NavigationUI navItems={this.state.navItems} />;
  }
}

function NavigationUI(props) {
  return (
    <nav>
      <ul className="nav-items">
        {
          props.navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.label}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}
