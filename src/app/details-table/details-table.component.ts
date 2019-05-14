import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent implements OnInit {
  @Input() details;
  constructor() { }

  ngOnInit() {
  }

 

}
