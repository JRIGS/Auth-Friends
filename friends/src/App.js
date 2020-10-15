import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import './App.css';

const linkstyle = {
  textDecoration: 'none',
  color: 'black'
}
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
        <p>
          <Link style={linkstyle} to='/login'>
          Login
          </Link>
        </p>
        <p>
          <Link style={linkstyle} to='/friends-list'>Friends</Link>
        </p>
        <p>
          <Link style={linkstyle} to='/add-friend'>Add Friend</Link>
        </p>
      </nav>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/friends-list' component={FriendList} />
      <PrivateRoute exact path='/add-friend' component={AddFriend} />

      </div>
      </Router>
    );
  }
}

export default App;