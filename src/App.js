import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Meetings from './views/Meetings';
import MeetingDetail from './views/MeetingDetail';
import Header from './components/Header';
import AddMeeting from './views/AddMeeting';

function App() {

  return (
    <Router>
      <div className="App">
        <Header className='header' />
        <Switch>
          <Route path='/' exact 
           component={Meetings} />
          <Route path='/meeting/:id' 
           component={MeetingDetail} />
          <Route path='/add-meeting'
           component={AddMeeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
