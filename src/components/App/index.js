import React, { Component } from 'react';
import ChatbotComponent from '../PartnerBot';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatbotComponent />
      </div>
    );
  }
}