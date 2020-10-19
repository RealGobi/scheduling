import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './meetings.css';

export default function Meetings() {

   // state 
   const [meetings, setMeetings] = useState([]);
   const url = 'https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list';
 
   // useEffect to fetch event data
   useEffect(() => {   
     fetchData();
    }, []);
    
    const fetchData = async () => {
        const response = await fetch(url); 
        const data = await response.json();
        setMeetings(data);
      }

      const linkStyle = {
        textDecoration: "none",
        color: '#111111'
      }

  return (
    <div className='container'>
       { meetings.sort((a,b)=> a.startDate > b.startDate ? 1 : -1).map( (meeting, idx) => (
         <Link style={linkStyle} key={idx} to={`/meeting/${meeting._id}`}>
            <div className='meetings-box'>
              <p>Plats: {meeting.location}</p>
              <p>Aktivitet: {meeting.activity}</p>
              <p>Datum och tid: {meeting.startDate} - {meeting.endDate}</p>
            </div>
          </Link>
            )) }
    </div>
  )
}
