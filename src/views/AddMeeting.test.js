import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  AddMeeting  from './AddMeeting';


test('add new meeting', () => {
  const { getByLabelText, getByText } = render(<AddMeeting />);

  const location = getByLabelText('Plats:');
  const activity = getByLabelText('Aktivitet:');
  const startDate = getByLabelText('Startdatum och tid:');
  const endDate = getByLabelText('Slutdatum och tid:');

  fireEvent.change(location, { target: {value: "Jest testing_Plats"}});
  fireEvent.change(activity, { target: {value: "Jest testing_Aktivitet"}});
  fireEvent.change(startDate, { target: {value: "2020-10-20 01:00"}});
  fireEvent.change(endDate, { target: {value: "2020-10-20 02:00"}});
  fireEvent.click(getByText("Add meeting"));
});