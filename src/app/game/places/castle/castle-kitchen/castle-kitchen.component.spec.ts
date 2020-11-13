import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleKitchenComponent } from './castle-kitchen.component';

describe('CastleKitchenComponent', () => {
  let component: CastleKitchenComponent;
  let fixture: ComponentFixture<CastleKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastleKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
