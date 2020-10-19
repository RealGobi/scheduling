import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import './addMeeting.css';

export default function AddMeeting() {

  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      location,
      activity,
      startDate,
      endDate
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  setLocation('');
  setActivity('');
  setStartDate('');
  setEndDate('');
  }
  return (
    <div className='add-meeting-box'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Plats: </label>
          <input type="text"
                 className="form-control"
                 value={location}
                 onChange={e => setLocation(e.target.value)} />
        </div>
      <div className="form-group">
          <label>Aktivitet: </label>
          <input type="text"
                 className="form-control"
                 value={activity}
                 onChange={e => setActivity(e.target.value)} />
        </div>
      <div className="form-group">
          <label>Startdatum och tid: </label>
           <p className='date-info-text'>(YYYY-MM-DD HH:MM)</p>
          <input type="text"
                 className="form-control"
                 value={startDate}
                 onChange={e => setStartDate(e.target.value)} />
        </div>
      <div className="form-group">
          <label>Slutdatum och tid: </label>
           <p className='date-info-text'>(YYYY-MM-DD HH:MM)</p>
          <input type="text"
                 className="form-control"
                 value={endDate}
                 onChange={e => setEndDate(e.target.value)} />
        </div>
        <Button id='btn-submit' variant="contained" color="primary" type="submit" value="Submit" >Add meeting</Button>
      </form>
    </div>
  )
}
