import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string = '';
  constructor() { }
  ngOnInit(): void {}
}
