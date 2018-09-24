import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
