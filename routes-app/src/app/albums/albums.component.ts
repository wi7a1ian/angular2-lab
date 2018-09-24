import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  private id: string = null;
  private loading: boolean;
  private data: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private userDataService: UserDataService) {
    this.route.parent.params.subscribe(params => {
      this.id = params["id"];
    });
  }

  makeRequest(id: string): void {

    this.data = null;
    this.loading = true;

    this.userDataService.getUserAlbums(id)
      .subscribe(res => {
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
    this.makeRequest(this.id);
  }

}