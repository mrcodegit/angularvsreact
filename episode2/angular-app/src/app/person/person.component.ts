import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string = '';
  @Output() personClicked: EventEmitter<any> = new EventEmitter()
  constructor() { }
  ngOnInit(): void {}

  onPersonClicked(): void{
    this.personClicked.emit();
  }
}
