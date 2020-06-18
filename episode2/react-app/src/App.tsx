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
        persons,
        inputValue: ''
      }
    })
  }

  removePerson = (i: number) => {
    this.setState((state: any) => {
      const newArray = state.persons.slice();
      newArray.splice(i, 1);
      return {
        persons: newArray
      }
    })
  }


  render() {
    return (
      <div className="App">
        <h1>React vs Angular</h1>
        <div className="input-container">
          <label>name</label>
          <input id="name" type="text" value={this.state.inputValue} onChange={e => this.change(e)} />
          <button disabled={!this.state.inputValue} onClick = {() => {this.addPerson(this.state.inputValue)}} >ADD</button>
        </div>
        <div className="persons-list">
          {this.state.persons.map((person: string, i: number) => {
            return <Person onClickHandler={() => this.removePerson(i)} key={i} cls="person" name={person}></Person>
          })}
        </div>
      </div>
    )
  };
}

export default App;
