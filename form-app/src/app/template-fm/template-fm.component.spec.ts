import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFmComponent } from './template-fm.component';

describe('TemplateFmComponent', () => {
  let component: TemplateFmComponent;
  let fixture: ComponentFixture<TemplateFmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
