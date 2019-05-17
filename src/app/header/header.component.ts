import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { sortOptionData } from '../constants';
import { GitthubApiService } from '../gitthub-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sortOptionData: sortOptionData[];
  public searchForm: FormGroup = this.builder.group({
    sortOption: [sortOptionData.sortByNameAsc, Validators.required],
    searchString: ['', Validators.required]
    });
    @Output() searchEvent = new EventEmitter();
  constructor(private builder: FormBuilder, private gitubApiService: GitthubApiService) {

  }

  ngOnInit() {
    this.sortOptionData = [sortOptionData.sortByNameAsc,
      sortOptionData.sortByNameDsc, sortOptionData.sortByRankAsc, sortOptionData.sortByRankDsc];
    this.searchForm.controls.sortOption.valueChanges.subscribe(() => {
               this.gitubApiService.invokeSubjectEvent().next(this.searchForm.get('sortOption').value);
    });
  }

  public search() {
    const formValues = {
      sortType: this.searchForm.get('sortOption').value,
      searchTerm: this.searchForm.get('searchString').value
    };
    this.searchEvent.emit(formValues);
  }

}
