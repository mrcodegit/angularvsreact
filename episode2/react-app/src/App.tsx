import React, { Component } from 'react';
import Person from './component/Person';
import './App.scss';

class App extends Component<{}, any> {

  cls = "App";

  test = () => {
    console.log('test');
  }

  constructor(props: any) {
    super(props);
    this.state = {
      persons: ['Ragnar', 'Lagertha']
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React vs Angular</h1>
        <div className="input-container">
          <label>name</label>
          <input id="name" type="text" />
          <button>ADD</button>
        </div>
        <div className="persons-list">
          {this.state.persons.map((person: string, i: number) => {
            return <Person key={i} cls="person" name={person}></Person>
          })}
        </div>
      </div>
    )
  };
}

export default App;
