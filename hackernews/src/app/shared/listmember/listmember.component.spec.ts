import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmemberComponent } from './listmember.component';

describe('ListmemberComponent', () => {
  let component: ListmemberComponent;
  let fixture: ComponentFixture<ListmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
