import React from 'react';
import PropTypes from 'prop-types';
import './events.css';

export default function Events(props) {
const { event } = props;

  
  return (
    <div>
       { event.map( (e, idx) => <div className='event-box' key={idx}><p>{e.activity}</p></div>) }
    </div>
  )
}

Events.propTypes = {
  event: PropTypes.array.isRequired
}