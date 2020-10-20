import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';


it('render witout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header></Header>, div);
});