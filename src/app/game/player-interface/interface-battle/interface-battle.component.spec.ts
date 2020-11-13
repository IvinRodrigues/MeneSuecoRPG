import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceBattleComponent } from './interface-battle.component';

describe('InterfaceBattleComponent', () => {
  let component: InterfaceBattleComponent;
  let fixture: ComponentFixture<InterfaceBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
