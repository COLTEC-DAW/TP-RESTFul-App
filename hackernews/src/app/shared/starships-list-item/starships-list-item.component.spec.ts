import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsListItemComponent } from './starships-list-item.component';

describe('StarshipsListItemComponent', () => {
  let component: StarshipsListItemComponent;
  let fixture: ComponentFixture<StarshipsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
