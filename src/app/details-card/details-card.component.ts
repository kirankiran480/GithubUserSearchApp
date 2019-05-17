import { Component, OnInit, Input } from '@angular/core';
import { GitthubApiService } from '../gitthub-api.service';
import { UserData, Repo, User } from '../userData.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent  {
  @Input() public user: User;
  public isOpened = false;
  public repoList: Repo[];
  constructor(private gitthubApiService: GitthubApiService) { }

public getUserRepoDetails(reposUrl: string) {
    this.gitthubApiService.getUserDetails(reposUrl).subscribe((response: Repo[]) => {
      this.repoList = response;
      this.isOpened = true;
    }, (error) => {
        console.log(error);
    });
  }

}
