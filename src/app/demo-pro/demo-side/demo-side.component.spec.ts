import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSideComponent } from './demo-side.component';

describe('DemoSideComponent', () => {
  let component: DemoSideComponent;
  let fixture: ComponentFixture<DemoSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
