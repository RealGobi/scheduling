import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './meetingDetail.css';

export default function MeetingDetail({ match }) {

     // state 
     const [meetingDetails, setMeetingDeails] = useState({});
     const url = `https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list/${match.params.id}`;
   
     // useEffect to fetch event data
     useEffect(() => {   
       fetchData();
      }, []);
      
      const fetchData = async () => {
          const response = await fetch(url); 
          const data = await response.json();
          console.log(data);
          
          setMeetingDeails(data);
        }
        
  return (
    <div className="meetingDetail">
      <div className='card'>
        <p>Plats: {meetingDetails.location}</p>
        <p>Aktivitet: {meetingDetails.activity}</p>
        <p>Datum och tid: {meetingDetails.startDate} - {meetingDetails.endDate}</p>
      </div>
    </div>
  )
}

MeetingDetail.propTypes = {
  match: PropTypes.object
};