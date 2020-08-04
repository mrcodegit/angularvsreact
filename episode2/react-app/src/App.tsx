import React, { Component, ChangeEvent } from 'react';
import Person from './component/Person';
import './App.scss';
import Layout from './containers/layout/layout';

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
      <Layout>

      </Layout>
    )
  };
}

export default App;
