import { Component } from '@angular/core';
import { GitthubApiService } from './gitthub-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-search-app';
  users: any;
   constructor(private gitthubApiService:GitthubApiService){

   }

  public handleSearch(formValues)
  {
    this.gitthubApiService.getGithubUserList(formValues.searchTerm).subscribe((response)=>{
      console.log(response);
      this.users = response.items;
    },(error)=>{
      console.log(error);
    })
  }

}
