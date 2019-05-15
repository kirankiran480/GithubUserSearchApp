import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {  HttpClient } from '@angular/common/http';


@Injectable()
export class GitthubApiService {
  public invokeEvent:Subject<any> = new Subject();
  private apiServer: string = "https://api.github.com";
  constructor(private httpClient: HttpClient) {
   
   }

  public getGithubUserList(term=''):Observable<any>{
    const url = 'https://api.github.com/search/users?q=' + term;
    return this.httpClient
    .get(url)
  }

  public getUserDetails(reposUrl):Observable<any>{
    
    return this.httpClient
    .get(reposUrl)
  }

  public invokeSubjectEvent(){
    return this.invokeEvent;
  }
}
