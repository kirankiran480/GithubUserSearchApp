import { Component, OnInit, Input } from '@angular/core';
import { GitthubApiService } from '../gitthub-api.service';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {
  @Input() user:any;
  isOpened:boolean = false;
  repoList: any;
  constructor(private gitthubApiService : GitthubApiService) { }

  ngOnInit() {
  }

  getUserRepoDetails(reposUrl)
  {
    this.gitthubApiService.getUserDetails(reposUrl).subscribe((response)=>{
      this.repoList = response;
      this.isOpened = true;
    },(error)=>{

    });
  }

}
