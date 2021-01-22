import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ITimeLogEntry } from './Types/ITimeLogEntry';
import { TimeLogForm } from './Components/TimeLogForm';

function App() {

  const defaultTimelog: ITimeLogEntry = {
    activity: '',
    date: null,
    minutesSpent: 0,
    notes: ''
  }

  return (
    <div className="App">
      <header className="App-header">
       <TimeLogForm defaultTimeLog={defaultTimelog}/>
      </header>
    </div>
  );
}

export default App;
