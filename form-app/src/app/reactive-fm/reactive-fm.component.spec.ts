import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFmComponent } from './reactive-fm.component';

describe('ReactiveFmComponent', () => {
  let component: ReactiveFmComponent;
  let fixture: ComponentFixture<ReactiveFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
