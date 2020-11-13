import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceMapComponent } from './interface-map.component';

describe('InterfaceMapComponent', () => {
  let component: InterfaceMapComponent;
  let fixture: ComponentFixture<InterfaceMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
