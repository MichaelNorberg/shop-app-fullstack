import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Shop from './Shop.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'type user name here',
    };
  };
  //sets a username to state
  collectData = (event, value) => {
    event.preventDefault();
    let userName = value;
    localStorage.setItem('name', value);
    this.setState({
      userName: userName,
    });
    window.location.pathname = '/shop';
  };
  //checks local-storage for username
  componentDidMount = () => {
    let userName= localStorage.getItem('name');
    this.setState({
      userName: userName,
    });
  };
  //clears local-storage of a username
  logOut = () => {
    localStorage.clear('name');
    window.location.pathname = '/';
  };

  render() {
    let brandStyle = {
      fontFamily: 'Love Ya Like A Sister',
    };
    let logoutButton = {
      backgroundColor: '#91DDEB'
    };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link style={brandStyle}className="navbar-brand" to="/">Shop App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" 
                                                           data-target="#navbarNavAltMarkup" 
                                                           aria-controls="navbarNavAltMarkup" 
                                                           aria-expanded="false" 
                                                           aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Home </Link>
              <Link className="nav-item nav-link" to="/Shop">Shop</Link> 
              <button style={logoutButton} onClick= {this.logOut} type="button" className="btn btn-outline-secondary">Log Out</button>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path= "/" exact render={(props)=> {return <Home userNameHandler={this.userNameHandler} 
                                                                 collectData={this.collectData} 
                                                                 value={this.state.userNameField}
                                                                 match={props.match}/>}}/>
          <Route path= "/Shop" render={(props)=> {return <Shop match={props.match}
                                                               userName = {this.state.userName}/>}}/>
        </Switch>
      </div>
    );
  };
};

export default App;
