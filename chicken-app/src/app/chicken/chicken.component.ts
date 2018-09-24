import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Chicken } from './chicken.model';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  outputs: ['deleteEvent', 'eggEvent'],
  styleUrls: ['./chicken.component.css']
})
export class ChickenComponent implements OnInit {

  // Declares a data-bound input property
  @Input() chicken: Chicken;

  // Declares a data-bound output property
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() eggEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  addEgg() {
    this.chicken.eggs++;
    this.eggEvent.emit(null)
  }

  collectEggs() {
    let eggCount = this.chicken.eggs;
    this.chicken.eggs = 0;
    this.eggEvent.emit(eggCount);
  }

  deleteChicken(name: string): void {
    this.deleteEvent.emit(name);
  }

  ngOnInit() {
  }

}
