import { Injectable, } from '@angular/core';

import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserDataService {
  
  private userEndpoint : string = "http://jsonplaceholder.typicode.com/users";
  private usersEndpoint : string = "http://jsonplaceholder.typicode.com/users";
  private todosEndpoint : string = "http://jsonplaceholder.typicode.com/todos";
  private postsEndpoint : string = "http://jsonplaceholder.typicode.com/posts";
  private albumsEndpoint : string = "http://jsonplaceholder.typicode.com/albums";

  constructor(private http: Http, ) {
    this.http = http;
  }

  getUser(id: string): Observable<any> {
    return this.http.request(this.userEndpoint +'/'+ id);
  };

  getUsers(): Observable<any> {
    return this.http.request(this.usersEndpoint);
  };

  getUserTodos(id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userId', id);
    return this.http.request(this.todosEndpoint, { search: params });
  };

  getUserPosts(id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userId', id);
    return this.http.request(this.postsEndpoint, { search: params });
  };

  getUserAlbums(id: string): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userId', id);
    return this.http.request(this.albumsEndpoint, { search: params });
  };
}