import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ChickenListComponent } from './chicken-list/chicken-list.component';
import { Chicken } from './chicken/chicken.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // The @ViewChild is like a input of sorts. Once the Init view is done, our variable will contain the child component with the specified selector. 
  // If there is more than one selector, then the first one will be there.
  @ViewChild(ChickenListComponent) chickenList: ChickenListComponent

  // ngAfterViewInit is called after Angular initializes the component's views and child views. Called once after the first ngAfterContentChecked
  ngAfterViewInit() {
    console.log('How many Chickens: ' + this.chickenList.chickens.length);
  }

  // This is called much later on, when the component has been created and need to be initialized.
  ngOnInit() {
  }

  addChicken(name: HTMLInputElement, breed: HTMLInputElement): boolean {
    console.log(`Adding Chicken name: ${name.value} breed: ${breed.value}`);

    let newChicken: Chicken = new Chicken(name.value, 0, breed.value);
    this.chickenList.addChicken(newChicken);

    name.value = '';
    breed.value = '';

    return false;
  }
}
