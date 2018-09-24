import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private userDataService: UserDataService) {
  }

  onError = function (e) {
    console.log("error", e);
  }

  //called unconditionally
  onComplete = function (url) {
    console.log("Completed:" + url);
  }

  makeRequest(id: number): void {

    //clear data and loading
    this.data = "";
    this.loading = false;

    this.userDataService.getUsers()
      .subscribe(res => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
    this.makeRequest(null)
  }

}
