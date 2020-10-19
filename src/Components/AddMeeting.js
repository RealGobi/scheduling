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
      
    </div>
  )
}
