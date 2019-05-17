import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})

export class PaginateComponent implements OnChanges, OnInit {

  constructor() { }
  @Input() totalRecords: number;
  @Input() recordsPerPage: number;
  @Input() currentPage: number;
  public countPerSet = 5;
  public shownPages = [];
  public totalPages: number;
  @Output() handleClick = new EventEmitter();
  ngOnInit() {
     this.totalPages = this.getTotalPages();
     this.getShownPages(this.currentPage);
  }

  ngOnChanges() {
    if (this.currentPage === 1) {
      this.totalPages = this.getTotalPages();
      this.getShownPages(this.currentPage);
    }
  }
  getTotalPages() {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }
  getShownPages(start) {
    this.shownPages.length = 0;
    const  countTill = this.totalPages < this.countPerSet ? this.totalPages + 1 : (start + this.countPerSet);
    for (let i = start; i < countTill; i++) {
        this.shownPages.push(i);
     }
  }

  next() {
    const prev = this.currentPage;
    this.currentPage =  this.currentPage + 1;
    this.handleClick.emit(this.currentPage);
    if (prev === this.shownPages[this.shownPages.length - 1]) {
       this.getShownPages(this.currentPage);
     }
  }

  previous() {
    const prev = this.currentPage;
    this.currentPage =  this.currentPage - 1;
    this.handleClick.emit(this.currentPage);
    if (prev === this.shownPages[0]) {
      this.getShownPages(prev - this.countPerSet);
    }
  }

  getResults(pageNumber) {
    this.currentPage = pageNumber;
    this.handleClick.emit(pageNumber);
  }

}
