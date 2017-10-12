import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoChatComponent } from './demo-chat.component';

describe('DemoChatComponent', () => {
  let component: DemoChatComponent;
  let fixture: ComponentFixture<DemoChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
