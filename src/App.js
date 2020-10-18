import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Meetings from './Components/Meetings';
import Meeting from './Components/Meeting';
import Header from './Components/Header';
import AddMeeting from './Components/AddMeeting';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header className='header' />
        <Switch>
          <Route path='/' exact 
          component={Meetings} />
          <Route path='/meeting/:id' 
          component={Meeting} />
          <Route path='/add-meeting'
          component={AddMeeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
