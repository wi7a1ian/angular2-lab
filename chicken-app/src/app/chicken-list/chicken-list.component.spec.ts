import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenListComponent } from './chicken-list.component';

describe('ChickenListComponent', () => {
  let component: ChickenListComponent;
  let fixture: ComponentFixture<ChickenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
