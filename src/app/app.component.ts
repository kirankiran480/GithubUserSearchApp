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
  sortedUsers:any;
  totalCount: number;
   constructor(private gitthubApiService:GitthubApiService){

   }

  public handleSearch(formValues)
  {
    this.gitthubApiService.getGithubUserList(formValues.searchTerm).subscribe((response)=>{
      this.totalCount = response.total_count;
      this.users = response.items;
      this.sortedUsers = this.sortBy(formValues.sortType,response.items);
    },(error)=>{
      console.log(error);
    })
  }

  public sortBy(sortType,items)
  {
      return items;
  }

}
