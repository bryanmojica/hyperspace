import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserSignIn from './userSignIn.js';


class ChromeApp extends Component {
  constructor (props) {
    super(props);
  
  this.state = {
    authenticated: false;
  };

  }



  render () {
    return (
      <div>
        <h1>WE R NOW RENDERING REACT IN R EXTENSION :) </h1>
        <UserSignIn />
        <Worker />
      </div>
    );
  }
}

ReactDOM.render(<ChromeApp />, document.getElementById('content'));

