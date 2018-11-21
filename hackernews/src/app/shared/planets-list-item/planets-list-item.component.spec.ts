import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsListItemComponent } from './planets-list-item.component';

describe('PlanetsListItemComponent', () => {
  let component: PlanetsListItemComponent;
  let fixture: ComponentFixture<PlanetsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
