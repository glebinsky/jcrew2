import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'main/header/header';
import Navigation from 'main/navigation/navigation';
import Content from 'main/content/content';
import Footer from 'main/footer/footer';
import './App.css';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Navigation} />
          <Route path="/c/:category/newarrivals" component={Content} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
