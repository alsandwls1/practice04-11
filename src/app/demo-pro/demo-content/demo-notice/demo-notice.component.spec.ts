import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNoticeComponent } from './demo-notice.component';

describe('DemoNoticeComponent', () => {
  let component: DemoNoticeComponent;
  let fixture: ComponentFixture<DemoNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
