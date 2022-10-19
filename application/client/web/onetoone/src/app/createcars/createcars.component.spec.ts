import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecarsComponent } from './createcars.component';

describe('CreatecarsComponent', () => {
  let component: CreatecarsComponent;
  let fixture: ComponentFixture<CreatecarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});