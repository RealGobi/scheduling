import React from 'react'

export default function Events(props) {
const { event } = props;

  
  return (
    <div>
       { event.map( (e, idx) => <p key={idx}>{e.activity}</p>) }
    </div>
  )
}
