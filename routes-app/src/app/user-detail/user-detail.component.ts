import { Component, OnInit } from '@angular/core';

import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Object;
  loading: boolean;
  id: string;

  constructor(private userDataService: UserDataService, private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  onError = function (e) {
    console.log("error", e);
  }

  //called unconditionally
  onComplete = function (url) {
    console.log("Completed:" + url);
  }

  makeRequest(id: string): void {

    //clear data and loading

    this.user = "";
    this.loading = false;

    // Note: The userDataService service is NOT availible to use in the constructor. 
    // We can refer to it, but should not be called until ngOnInit()
    this.userDataService.getUser(id)
      .subscribe(res => {
        this.user = res.json();
        this.loading = false;
    });
  }


  ngOnInit() {
    this.makeRequest(this.id)
  }

}