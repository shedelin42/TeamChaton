import React, { Component } from 'react';

//jQuery
import '../node_modules/jquery/src/jquery';

//main css
import './App.css';

//bootstrap stuff
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

//font awesome
import '../node_modules/font-awesome/css/font-awesome.css';

import Header from './partials/header';
import AppRouter from './router';

class App extends Component {
  render() {
    return (
      <div>
          <AppRouter/>
      </div>
    );
  }
}

export default App;
