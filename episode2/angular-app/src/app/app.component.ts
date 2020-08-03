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

  change = (event: Event) => {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  addPerson = (name: string) => {
    this.persons = this.persons.concat(name);
  }

  removePerson = (i: number) => {
      const newArray = this.persons.slice();
      newArray.splice(i, 1);
      this.persons = newArray;
  }
}
