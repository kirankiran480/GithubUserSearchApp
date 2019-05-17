import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../userData.model';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {
  @Input() details: Repo[];
  constructor() { }
}
