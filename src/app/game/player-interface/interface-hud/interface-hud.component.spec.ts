import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceHudComponent } from './interface-hud.component';

describe('InterfaceHudComponent', () => {
  let component: InterfaceHudComponent;
  let fixture: ComponentFixture<InterfaceHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
