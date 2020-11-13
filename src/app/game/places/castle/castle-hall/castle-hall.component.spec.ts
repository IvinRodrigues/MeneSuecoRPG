import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleHallComponent } from './castle-hall.component';

describe('CastleHallComponent', () => {
  let component: CastleHallComponent;
  let fixture: ComponentFixture<CastleHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastleHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
