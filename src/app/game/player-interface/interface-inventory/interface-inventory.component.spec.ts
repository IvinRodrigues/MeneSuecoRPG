import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceInventoryComponent } from './interface-inventory.component';

describe('InterfaceInventoryComponent', () => {
  let component: InterfaceInventoryComponent;
  let fixture: ComponentFixture<InterfaceInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
