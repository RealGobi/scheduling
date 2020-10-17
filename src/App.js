import React, { useState, useEffect } from 'react';
import './App.css';
import Events from './Components/Events';

function App() {
  // state 
  const [events, setEvents] = useState([]);
  const url = 'https://crudcrud.com/api/c974ef5540f34583aacee5422b10fc66/event-list';
console.log(events);


  // useEffect to fetch event data
  useEffect(() => {   
    const fetchData = async () => {
        const response = await fetch(url); 
        const data = await response.json();
        setEvents(data);
      }
      fetchData();
  }, []);

  
  
  return (
    <div className="App">
      <Events event={events} />
    </div>
  );
}

export default App;
