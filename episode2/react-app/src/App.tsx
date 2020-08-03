import React, { Component, ChangeEvent } from 'react';
import Person from './component/Person';
import './App.scss';

class App extends Component<{}, any> {

  newPersonName: string = '';
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: '',
      persons: ['Ragnar', 'Lagertha']
    }
  }

  change = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addPerson(name: string){
    this.setState((state: any) =>{
      const persons = state.persons.concat(name);
      return {
        persons
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React vs Angular</h1>
        <div className="input-container">
          <label>name</label>
          <input id="name" type="text" onChange={e => this.change(e)} />
          <button onClick = {() => {this.addPerson(this.state.inputValue)}} >ADD</button>
        </div>
        <div className="persons-list">
          {this.state.persons.map((person: string, i: number) => {
            return <Person onClick={() => {console.log('test')}} key={i} cls="person" name={person}></Person>
          })}
        </div>
      </div>
    )
  };
}

export default App;
