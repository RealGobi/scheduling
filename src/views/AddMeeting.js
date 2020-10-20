import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import FormInput from '../components/FormInput';

import './addMeeting.css';

export default function AddMeeting() {

  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
    fetch('https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list', {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify({
      activity,
      startDate,
      endDate,
      location
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
        <FormInput 
          lableInput='Plats:' 
          typeInput='text' 
          valueInput={location} 
          onChangeInput={e => setLocation(e.target.value)} 
          />
        <FormInput 
          lableInput='Aktivitet:' 
          typeInput='text' 
          valueInput={activity} 
          onChangeInput={e => setActivity(e.target.value)} 
          />
        <FormInput 
          lableInput='Startdatum och tid:' 
          pTag='(YYYY-MM-DD HH:MM)' 
          classNamePTag='date-info-text' 
          typeInput='text' 
          valueInput={startDate} 
          onChangeInput={e => setStartDate(e.target.value)} 
          />
        <FormInput 
          lableInput='Slutdatum och tid:' 
          pTag='(YYYY-MM-DD HH:MM)' 
          classNamePTag='date-info-text' 
          typeInput='text' 
          valueInput={endDate} 
          onChangeInput={e => setEndDate(e.target.value)} 
          />
        <Button id='btn-submit' variant="contained" color="primary" type="submit" value="Submit" >Add meeting</Button>
      </form>
    </div>
  )
}
