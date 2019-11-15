import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>This is realy working</p>
      <Person />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello React'))
}

export default App;
