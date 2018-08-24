import React, { Component } from 'react';
import './sign-in.css';

export default class SignIn extends Component {

  static getDerivedStateFromProps(props, state) {
    return { signedIn: props.signedIn };
  }

  state = {
    signedIn: this.props.signedIn
  }

  render() {
    return (
      <div className="sign-in">Sign In</div>
    );
  }
}
