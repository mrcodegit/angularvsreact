import React, { Component, ReactNode } from 'react';
import Person from '../../component/Person';
class Heroes extends Component<{}, any>  {
  constructor(props: any){
    super(props);
    this.state = {
      inputValue: "",
      persons: ['Lagertha']
    }
  }

  public change(){}

  public addPerson(a: any){}

  public render(): ReactNode {
    return (
      <div className="App">
        <h1>React vs Angular</h1>
        <div className="input-container">
          <label>name</label>
          <input id="name" type="text" onChange={e => this.change()} />
          <button onClick={() => { this.addPerson(this.state.inputValue) }} >ADD</button>
        </div>
        <div className="persons-list">
          {this.state.persons.map((person: string, i: number) => {
            return <Person onClick={() => { console.log('test') }} key={i} cls="person" name={person}></Person>
          })}
        </div>
      </div>
    )
  }
}

export default Heroes;