import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit,OnChanges{

  constructor() { }
  @Input() totalRecords:number;
  @Input() recordsPerPage:number;
  @Input() currentPage:number;
  public shownPages=[];
  public totalPages:number;
  @Output() handleClick = new EventEmitter();
  ngOnInit() {
    this.totalPages = this.getTotalPages();
     this.getShownPages(this.currentPage);
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.hasOwnProperty('currentPage'))
    {
      if(this.currentPage ==1)
      {
        this.getShownPages(this.currentPage);
      }
    }
  }
  getTotalPages(){
    return this.totalRecords/this.recordsPerPage;
  }
  getShownPages(start){
    this.shownPages.length =0;
     for(let i=start;i<start+5;i++)
     {
        this.shownPages.push(i);
     }
  }

  next(){
    const prev = this.currentPage;
     this.currentPage =  this.currentPage+1;
     this.handleClick.emit(this.currentPage);
     if(prev === this.shownPages[this.shownPages.length-1])
     {
       this.getShownPages(this.currentPage);
     }
  }

  previous(){
    const prev = this.currentPage;
    this.currentPage =  this.currentPage-1;
    this.handleClick.emit(this.currentPage);
    if(prev === this.shownPages[0])
    {
      this.getShownPages(prev-5);
    }
  }

  getResults(pageNumber)
  {
    this.currentPage = pageNumber;
    this.handleClick.emit(pageNumber);
  }

}
