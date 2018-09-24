import { Component, OnInit } from '@angular/core';
import { Chicken } from '../chicken/chicken.model';

@Component({
  selector: 'app-chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.css']
})
export class ChickenListComponent implements OnInit {

  chickens: Chicken[];
  eggs: number = 0;
  collectedEggs: number = 0;
  sortChickensOrder: string = "name";

  constructor() {

    let lineup = new Array<Chicken>();

    lineup.push(new Chicken('Moneypenny'));
    lineup.push(new Chicken('Butterbean', 2));
    lineup.push(new Chicken('Pickles', 3, 'Rhode Island Red'));
    lineup.push(new Chicken('Nugget'));

    this.chickens = lineup;
  }

  public addChicken(newLilClucker: Chicken) {
    this.chickens.push(newLilClucker);
  }

  private deleteChickenFromList(chickenName: string) {
    console.log(`Chicken flew the coop: ${chickenName}`);

    this.chickens = this.chickens.filter(
      (chicken) => !(chicken.name === chickenName)
    );

    this.eggEvent(null);
  }

  private eggEvent(collected: number) {

    if (collected !== null) {
      this.collectedEggs += collected;
    }

    this.eggs = this.chickens.map(function (c) {
      return c.eggs
    }).reduce((a, b) => a + b, 0);

    console.log("eggs:" + this.eggs)

  }

  private GetChickenListInOrder(): Chicken[] {
    if (this.sortChickensOrder == "name")
      return this.chickens.sort((a: Chicken, b: Chicken) => b.name < a.name ? 1 : -1);
    if (this.sortChickensOrder == "breed")
      return this.chickens.sort((a: Chicken, b: Chicken) => b.breed < a.breed ? 1 : -1);
    if (this.sortChickensOrder == "eggs")
      return this.chickens.sort((a: Chicken, b: Chicken) => b.eggs - a.eggs);

    return this.chickens;
  }

  ngOnInit() {
    this.eggEvent(null);
  }
}
