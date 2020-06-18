import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  persons: string[] = ['Ragnar', 'Lagertha'];
  inputValue: string = '';

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

}
