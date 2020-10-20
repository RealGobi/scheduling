import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './header.css';


export default function Header() {

  const linkStyle = {
    textDecoration: "none"
  }

  return (
    <Router>
      <div className='header'>
        <h1>Meetings for Jimmy</h1>
        <span className='container-btn'>
          <Link style={linkStyle}  to='/'>
            <Button id='button' variant="contained" color="primary" >Meetings</Button>
          </Link>
          <Link style={linkStyle}  to='/add-meeting'>
          <Button variant="contained" color="primary" >Add meeting</Button>
          </Link>
        </span>
      </div>
    </Router>
  )
}
