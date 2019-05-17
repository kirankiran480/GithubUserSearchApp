import { Component, OnInit } from '@angular/core';
import { GitthubApiService } from './gitthub-api.service';
import { sortOptionData } from './constants';
import { User } from './userData.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'github-search-app';
  public users: User[];
  public sortedUsers: User[];
  public totalCount: number;
  public sortType: sortOptionData = sortOptionData.sortByNameAsc;
  public formValues: any;
  public currentPage = 1;
  public recordsPerPage = 10;
   constructor(private gitthubApiService: GitthubApiService) {

   }

   ngOnInit() {
       this.gitthubApiService.invokeSubjectEvent().subscribe((sortType) => {
         this.sortType = sortType;
         if (this.sortedUsers) {
          this.sortBy(sortType);
        }
       });
   }

  public handleSearch(formValues: { searchTerm: string; sortType: any; }) {
    this.formValues = formValues;
    if (formValues.searchTerm) {
      this.gitthubApiService.getGithubUserList(formValues.searchTerm).subscribe((response) => {
        this.totalCount = response.totalCount;
        this.sortedUsers = response.users;
        this.sortBy(formValues.sortType);
        this.currentPage = 1;
      }, (error) => {
        console.log(error);
      });
    }

  }

  public handlepagination(pageNumber: number) {
    this.currentPage = pageNumber;
    if (this.formValues.searchTerm) {
      this.gitthubApiService.getGithubUserList(this.formValues.searchTerm, pageNumber, this.recordsPerPage).subscribe((response) => {
        this.totalCount = response.totalCount;
        this.sortedUsers = response.users;
        this.sortBy(this.formValues.sortType);
      }, (error) => {
        console.log(error);
      });
    }
  }
  public sortBy(sortType: any) {
      switch (sortType) {
        case sortOptionData.sortByNameAsc:
        this.sortedUsers.sort((a, b) => {
          return this.sortAlphabetically(a, b, 'login');
          });
        break;
        case sortOptionData.sortByNameDsc:
       this.sortedUsers.sort((a, b) => {
         return this.sortAlphabetically(b, a, 'login');
        });
       break;
        case sortOptionData.sortByRankAsc:
         this.sortedUsers.sort((a, b) => parseFloat(a.score.toString()) - parseFloat(b.score.toString()));
         break;
        case sortOptionData.sortByRankDsc:
         this.sortedUsers.sort((a, b) => parseFloat(b.score.toString()) - parseFloat(a.score.toString()));
         break;
      }
  }

  public sortAlphabetically(a: User, b: User, key: string): number {
    let nameA: number;
    let nameB: number;
    nameA = a[key].toLowerCase(), nameB = b[key].toLowerCase();
    if (nameA < nameB) { // sort string ascending
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0; // default return value (no sorting)
  }

}
