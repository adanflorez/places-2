import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

import './App.css';
import MyAppBar from './components/navigation/MyAppBar';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <MyAppBar />
        <TransitionGroup>
          <CSSTransition classNames="left-out" timeout={300}>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </MuiThemeProvider>
    );
  }
}

export default App;
