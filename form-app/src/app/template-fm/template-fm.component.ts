import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.interface'

@Component({
  selector: 'app-template-fm',
  templateUrl: './template-fm.component.html',
  styleUrls: ['./template-fm.component.css']
})
export class TemplateFmComponent implements OnInit {

  constructor() { }

  user: User = {
    name: "george",
    phone: "444-444-4444",
    email: "sss@ggg.com"
  };

  setDefault() {
    this.user = {
      name: "ted",
      phone: "333-333-3333",
      email: "ted@talk.com"
    };
  }

  private onSubmit(x) {
    this.user = x;
    console.log(x)
  }

  ngOnInit() {
  }

}
