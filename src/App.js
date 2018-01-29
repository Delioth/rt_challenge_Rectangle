import React, { Component } from 'react';
import './App.css';
import {Rectangle} from './components/Rectangle.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Rectangle header="Div 1" borderColor="blue" fillColor="lightBlue">
          <Rectangle header="Div 2" borderColor="blue" fillColor="orange">
            <Rectangle header="Div 3" borderColor="blue" fillColor="lightOrange">
            </Rectangle>
          </Rectangle>
        </Rectangle>
      </div>
    );
  }
}

export default App;
