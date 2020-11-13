import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabernBathroomComponent } from './tabern-bathroom.component';

describe('TabernBathroomComponent', () => {
  let component: TabernBathroomComponent;
  let fixture: ComponentFixture<TabernBathroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabernBathroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabernBathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
