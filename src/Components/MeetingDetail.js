import React, { useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';


import './meetingDetail.css';

export default function MeetingDetail({ match }) {

     // state 
     const [meetingDetails, setMeetingDeails] = useState({});
     const url = `https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list/${match.params.id}`;
     const history = useHistory();

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

        // delete
const deleteClick = (id) => {
  fetch(`https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list/${id}`, {
      method: 'DELETE'
    })
    .then(response => console.log(response))
    history.push("/")
  }

const btnStyle = {
  width: '100%'
}
        
  return (
    <div className="meetingDetail">
      <div className='card'>
        <p>Plats: {meetingDetails.location}</p>
        <p>Aktivitet: {meetingDetails.activity}</p>
        <p>Datum och tid: {meetingDetails.startDate} - {meetingDetails.endDate}</p>
      </div>
      <Button onClick={() => deleteClick(meetingDetails._id)} style={btnStyle} variant="contained" color="secondary">Delete</Button>
    </div>
  )
}

MeetingDetail.propTypes = {
  match: PropTypes.object
};