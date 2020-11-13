import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabernBarComponent } from './tabern-bar.component';

describe('TabernBarComponent', () => {
  let component: TabernBarComponent;
  let fixture: ComponentFixture<TabernBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabernBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabernBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
