import { Component } from '@angular/core';
import { GitthubApiService } from './gitthub-api.service';
import { sortOptionData } from './constants';
import { Subject } from 'rxjs';
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
  sortType: sortOptionData = sortOptionData.sortByNameAsc;
  formValues: any;
  currentPage = 1;
  recordsPerPage:10;
   constructor(private gitthubApiService:GitthubApiService){

   }

   ngOnInit()
   {
       this.gitthubApiService.invokeSubjectEvent().subscribe((sortType)=>{
         this.sortType = sortType;
        if(this.sortedUsers)
        {
          this.sortBy(sortType);
        }
       });
   }

  public handleSearch(formValues)
  {
    this.formValues = formValues;
    if(formValues.searchTerm)
    {
      this.gitthubApiService.getGithubUserList(formValues.searchTerm).subscribe((response)=>{
        this.totalCount = response.total_count;
        this.sortedUsers = response.items;
        this.sortBy(formValues.sortType);
        this.currentPage=1;
      },(error)=>{
        console.log(error);
      })
    }
    
  }

  public handlepagination(pageNumber)
  {
    this.currentPage = pageNumber;
    if(this.formValues.searchTerm)
    {
      this.gitthubApiService.getGithubUserList(this.formValues.searchTerm,pageNumber,this.recordsPerPage).subscribe((response)=>{
        this.totalCount = response.total_count;
        this.sortedUsers = response.items;
        this.sortBy(this.formValues.sortType);
      },(error)=>{
        console.log(error);
      })
    }
  }
  public sortBy(sortType)
  {
    
      switch(sortType){
        case sortOptionData.sortByNameAsc:
        this.sortedUsers.sort((a,b)=>{
          let nameA,nameB;
          nameA=a['login'].toLowerCase(), nameB=b['login'].toLowerCase();
          if (nameA < nameB) 
              return -1 
          if (nameA > nameB)
              return 1
          return 0  
          }); 
        break;
        case sortOptionData.sortByNameDsc:
       this.sortedUsers.sort((a,b)=>{
        let nameA,nameB;
        nameA=b['login'].toLowerCase(), nameB=a['login'].toLowerCase();
        if (nameA < nameB) 
            return -1 
        if (nameA > nameB)
            return 1
        return 0  
        }); 
        break;
        case sortOptionData.sortByRankAsc:
         this.sortedUsers.sort((a, b) => parseFloat(a.score) - parseFloat(b.score)); 
         break;
        case sortOptionData.sortByRankDsc:
         this.sortedUsers.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)); 
         break;
      }
  }

  public sortAlphabetically(a,b,key){
    let nameA,nameB;
    nameA=a[key].toLowerCase(), nameB=b[key].toLowerCase();
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
  }

}
