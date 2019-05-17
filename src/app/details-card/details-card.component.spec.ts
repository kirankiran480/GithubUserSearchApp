import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardComponent } from './details-card.component';
import { GitthubApiService } from '../gitthub-api.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { UserData } from '../userData.model';

describe('DetailsCardComponent', () => {
  let component: DetailsCardComponent;
  let fixture: ComponentFixture<DetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCardComponent ],
      providers: [{provide: GitthubApiService, useValue: {
        getUserDetails: (url) => of({})
      } }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCardComponent);

    component = fixture.componentInstance;
    component.user = {
      login : 'kiran',
      profileUrl : '',
      reposUrl : '',
      avatarUrl : '',
      score : 45,
      type : ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
