import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceChatComponent } from './interface-chat.component';

describe('InterfaceChatComponent', () => {
  let component: InterfaceChatComponent;
  let fixture: ComponentFixture<InterfaceChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
