import { Component } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
    this.http = http;
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

    let usersUrl = "http://jsonplaceholder.typicode.com/users"
    if (id) {
      usersUrl = usersUrl + "/" + id;
    }

    let params: URLSearchParams = new URLSearchParams();
    params.set('food', "spam");
    params.set('bakedBeans', "off");

    let headers: Headers = new Headers();
    headers.append("Cache-Control", "no-store"); 
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Session-token", "dupa");

    //start loading
    this.loading = true;

    //build request and subscribe to results.
    this.http.get(usersUrl, { search: params, headers: headers })
      .subscribe(
        (res: Response) => {
          this.data = res.json();
          this.loading = false;
        },
        (error) => this.onError(error),
        () => this.onComplete(usersUrl)
      );

      // this.http.request(usersUrl).subscribe((res: Response) => { this.data = res.json() })
      // this.http.request(usersUrl).map(response => response.json()).subscribe(result => { this.data = result })
  }

}
