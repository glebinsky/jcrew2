import React, { Fragment } from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="link-label">Contact Us</div>
        <ul>
          <li className="tweet">
            <ion-icon name="logo-twitter"></ion-icon>
            <span>@jcrew_help</span>
          </li>
          <li className="call">
            <i className="material-icons">phone</i>
            <span>1 800 562 0258</span>
          </li>
          <li className="help">
            <i className="material-icons">help</i>
            <span>help@jcrew.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
