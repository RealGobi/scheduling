import React, { useState, useEffect } from 'react';
import { fetchData } from '../components/ApiCalls';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

import './meetings.css';

export default function Meetings() {

  const [meetings, setMeetings] = useState([]);
  const url = 'https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list';

  useEffect(() => {
    getData();
  }, [])

  const getData = async () =>{
    const data = await fetchData(url);
    setMeetings(data);
  }

  const linkStyle = {
    textDecoration: "none",
    color: '#111111'
  }

  return (
    <div className='container'>
       { meetings.sort((a, b) => a.startDate > b.startDate ? 1 : -1).map((meeting, idx) => (
         <Link style={linkStyle} key={idx} to={`/meeting/${meeting._id}`}>
            <Card variant="outlined" className='card' id='card'>
              <p>Plats: {meeting.location}</p>
              <p>Aktivitet: {meeting.activity}</p>
              <p>Startdatum: {meeting.startDate}</p>
              <p>Slutdatum: {meeting.endDate}</p>
            </Card>
          </Link>
            )) }
    </div>
  )
}
