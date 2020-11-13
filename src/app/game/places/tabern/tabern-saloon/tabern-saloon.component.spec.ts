import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabernSaloonComponent } from './tabern-saloon.component';

describe('TabernSaloonComponent', () => {
  let component: TabernSaloonComponent;
  let fixture: ComponentFixture<TabernSaloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabernSaloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabernSaloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
