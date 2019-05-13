import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sortOptionData:any;
  public searchForm: FormGroup = this.builder.group({
    sortOption: ['Sort By Name A-Z',Validators.required],
    searchString: ['',Validators.required]
    });
    @Output() searchEvent = new EventEmitter();
  constructor(private builder: FormBuilder) { 

  }

  ngOnInit() {
    this.sortOptionData = ['Sort By Name A-Z','Sort By Name Z-A','Rank increasing','Rank decreasing'];
  }

  public search()
  { 
    const formValues = {
      sortType: this.searchForm.get('sortOption').value,
      searchTerm: this.searchForm.get('searchString').value
    }

     this.searchEvent.emit(formValues);
  }

}
