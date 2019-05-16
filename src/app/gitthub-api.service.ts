import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {  HttpClient } from '@angular/common/http';


@Injectable()
export class GitthubApiService {
  public invokeEvent:Subject<any> = new Subject();
  constructor(private httpClient: HttpClient) {
   
   }

  public getGithubUserList(term='',pageNumber=1,recordsPerPage=10):Observable<any>{
    const url = 'https://api.github.com/search/users?q=' + term+'&page='+pageNumber+'&per_page='+recordsPerPage;
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
