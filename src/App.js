import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>This is realy working</p>
      <Person name="JP" age="21"/>
      <Person name="HB" age="87"/>
      <Person name="EB" age="85"/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React'))
}

export default App;
