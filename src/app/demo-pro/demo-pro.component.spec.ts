import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProComponent } from './demo-pro.component';

describe('DemoProComponent', () => {
  let component: DemoProComponent;
  let fixture: ComponentFixture<DemoProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
