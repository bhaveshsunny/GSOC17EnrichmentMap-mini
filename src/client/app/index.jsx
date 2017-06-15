import React from 'react';
import {render} from 'react-dom';
import styles from './css/style.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));
