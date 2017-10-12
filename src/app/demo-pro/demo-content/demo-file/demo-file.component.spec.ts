import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFileComponent } from './demo-file.component';

describe('DemoFileComponent', () => {
  let component: DemoFileComponent;
  let fixture: ComponentFixture<DemoFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
