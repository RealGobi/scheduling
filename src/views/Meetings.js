import React, { useState, useEffect } from 'react';
import { fetchData } from '../components/ApiCalls';
import { Link } from 'react-router-dom';
import { Card, Grid, Box } from '@material-ui/core';

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

  const overlappingDates = [];
  const calcOverlappingDates = () => meetings.map(meeting => {
    let date1 = new Date(meeting.startDate.substring(0,10));
    let date2 = new Date(meeting.endDate.substring(0,10));
    let result = date1.getTime() !== date2.getTime();
    if(result === true){
      overlappingDates.push(meeting)
    } 
    return overlappingDates;
  })
  calcOverlappingDates();
  
  return (
    <Grid container spacing={1}>
      <Grid container justify = "center" item xs={12} spacing={3}>
        { meetings.concat(overlappingDates).sort((a, b) => a.startDate > b.startDate ? 1 : -1).map((meeting, idx) => (
          <Link style={linkStyle} key={idx} to={`/meeting/${meeting._id}`}>
              <Card variant="outlined" className='card' id='card'>
                <p>Plats: {meeting.location}</p>
                <p>Aktivitet: {meeting.activity}</p>
                <p>Startdatum: {meeting.startDate}</p>
                <p>Slutdatum: {meeting.endDate}</p>
              </Card>
            </Link>
          )) }
        </Grid>
    </Grid>
  )
}
