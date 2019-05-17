import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTableComponent } from './details-table.component';
import { GitthubApiService } from '../gitthub-api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DetailsTableComponent', () => {
  let component: DetailsTableComponent;
  let fixture: ComponentFixture<DetailsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTableComponent ],
      providers: [{provide: GitthubApiService, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
